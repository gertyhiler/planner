import ErrorInstance, { ServerErrorImpl } from "./error";

export type FetchInstanceConfig = {
  baseURL?: string;
  requestInterceptor?: (
    url: string,
    config: RequestInit
  ) => Promise<RequestInit | null>;
  responseInterceptor?: (
    response: ApiInterface<any>
  ) => Promise<ApiInterface<any> | null>;
};

// type BodyT = Record<string, any>;
// type DataT = ArrayBuffer | string | Blob | BodyT;
// type QueryT = Record<string, string>;
// type ReturnT<T> = Promise<ApiInterface<T> | ServerErrorImpl>;

/**
 * Класс для выполнения HTTP-запросов с поддержкой перехватчиков и обработкой различных типов данных.
 *
 * @example
 * const api = new FetchInstance({ baseURL: 'https://api.example.com' });
 *
 * // Простой GET-запрос
 * const response = await api.get('/users');
 *
 * // POST-запрос с данными
 * const createResponse = await api.post('/users', { name: 'John' });
 *
 * // Отправка файлов
 * const formData = new FormData();
 * formData.append('file', file);
 * const uploadResponse = await api.postFD('/upload', formData);
 * // Или
 * const uploadResponse = await api.postFD('/upload', { file });
 * // Отправить как форму можно любой объект, он будет преобразован в FormData
 */
export class FetchInstance {
  private baseUrl: string;

  /**
   * Перехватчик запросов по умолчанию. Добавляет токен авторизации к запросам.
   * Может быть переопределен при создании экземпляра класса.
   */
  private requestInterceptor?: (
    url: string,
    config: RequestInit
  ) => Promise<RequestInit | null> = async (url, config) => config;

  /**
   * Перехватчик ответов по умолчанию.
   * Может быть переопределен при создании экземпляра класса.
   */
  private responseInterceptor?: (
    response: ApiInterface<any>
  ) => Promise<ApiInterface<any> | null>;

  /**
   * Создает новый экземпляр FetchInstance.
   *
   * @param {Object} options - Параметры инициализации
   * @param {string} [options.baseURL] - Базовый URL для всех запросов
   * @param {Function} [options.requestInterceptor] - Пользовательский перехватчик запросов
   */
  constructor({
    baseURL = "",
    requestInterceptor,
    responseInterceptor,
  }: FetchInstanceConfig) {
    this.baseUrl = baseURL;
    if (requestInterceptor) this.requestInterceptor = requestInterceptor;
    if (responseInterceptor) this.responseInterceptor = responseInterceptor;
  }

  /**
   * Создает строку параметров запроса из объекта.
   *
   * @param {Record<string, any>} params - Объект с параметрами запроса
   * @returns {string} Строка параметров запроса
   */
  public createQueryParams(params: Record<string, any>) {
    if (!params || Object.keys(params).length === 0) {
      return "";
    }
    const queryString = Object.entries(params)
      .map(([key, value]) => {
        if (typeof value === "undefined" || value === null || value === "") {
          return "";
        }
        return `${key}=${String(value)}`;
      })
      .filter(Boolean)
      .join("&");
    return queryString ? `?${queryString}` : "";
  }

  /**
   * Преобразует объект в FormData.
   * Поддерживает вложенные объекты, массивы, даты и файлы.
   *
   * @param {Record<string, any>} obj - Объект для преобразования
   * @param {FormData} [form] - Существующий объект FormData (опционально)
   * @param {string} [namespace] - Пространство имен для вложенных объектов
   * @returns {FormData} Объект FormData с данными
   */
  private toFormData(
    obj: Record<string, any>,
    form?: FormData,
    namespace?: string
  ) {
    const fd = form || new FormData();
    let formKey;

    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        if (namespace) {
          formKey = namespace + "[" + property + "]";
        } else {
          formKey = property;
        }

        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        } else if (
          typeof obj[property] === "object" &&
          obj[property] !== null &&
          !(obj[property] instanceof File)
        ) {
          this.toFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property] === null ? "" : obj[property]);
        }
      }
    }

    return fd;
  }

  /**
   * Базовый метод для выполнения HTTP-запросов.
   * Обрабатывает перехватчики, различные типы ответов и ошибки.
   *
   * @param {string} url - URL для запроса
   * @param {RequestInit} [config] - Конфигурация fetch
   * @returns {Promise<ApiInterface<T | ArrayBuffer | string> | ServerErrorImpl>}
   * @throws {ServerErrorImpl} При ошибках сети или неверном ответе сервера
   */
  public async originalFetch<T>(
    url: string,
    config?: RequestInit
  ): Promise<ApiInterface<T> | ServerErrorImpl> {
    if (
      typeof this !== "undefined" &&
      "requestInterceptor" in this &&
      typeof this.requestInterceptor === "function"
    ) {
      const interceptedConfig = await this.requestInterceptor(
        url,
        config || {}
      );
      if (!interceptedConfig)
        return ErrorInstance.create("Bad request", "Bad request", 400);

      config = interceptedConfig;
    }

    const localConfig: RequestInit & {
      headers: HeadersInit & { "Content-Type"?: string };
    } = {
      ...config,
      headers: {
        ["Content-Type"]: "application/json",
        ...config?.headers,
      },
    };

    if (localConfig.headers["Content-Type"] === "multipart/form-data")
      delete localConfig["headers"]["Content-Type"];

    try {
      const response = await fetch(`${this.baseUrl}${url}`, { ...localConfig });
      const responseForErrorHandling = response.clone();

      const configForInterception = {
        method: localConfig.method || "",
        url: url,
        headers: localConfig.headers,
        body: (localConfig.body as string) || "",
      };

      let apiInterface;
      switch (response.headers.get("content-type")) {
        case "application/json; charset=utf-8":
        case "application/json":
          apiInterface = {
            status: "success" as const,
            requestId: response.headers.get("x-request-id") || "",
            response: {
              headers: response.headers,
              status: response.status,
            },
            config: configForInterception,
            data: await response.json(),
          } satisfies ApiInterface<T>;
          break;
        case "plain/text; charset=utf-8":
        case "plain/text":
          apiInterface = {
            status: "success" as const,
            requestId: response.headers.get("x-request-id") || "",
            response: {
              headers: response.headers,
              status: response.status,
            },
            config: configForInterception,
            data: await response.text(),
          } satisfies ApiInterface<string>;
          break;
        case "blob":
          apiInterface = {
            status: "success" as const,
            requestId: response.headers.get("x-request-id") || "",
            response: {
              headers: response.headers,
              status: response.status,
            },
            config: configForInterception,
            data: await response.blob(),
          } satisfies ApiInterface<Blob>;
          break;
        default:
          apiInterface = {
            status: "success" as const,
            requestId: response.headers.get("x-request-id") || "",
            response: {
              headers: response.headers,
              status: response.status,
            },
            config: configForInterception,
            data: await response.arrayBuffer(),
          } satisfies ApiInterface<ArrayBuffer>;
          break;
      }

      if (
        typeof this !== "undefined" &&
        "responseInterceptor" in this &&
        typeof this.responseInterceptor === "function"
      ) {
        const interceptedResponse =
          await this.responseInterceptor(apiInterface);
        if (!interceptedResponse) {
          const error = await responseForErrorHandling.json();
          throw ErrorInstance.create(
            error.message,
            error.error || responseForErrorHandling.statusText,
            error.statusCode
          );
        }
        apiInterface = interceptedResponse;
      }

      if (response.ok) return apiInterface;
      else {
        const error = await responseForErrorHandling.json();
        throw ErrorInstance.create(
          error.message,
          error.error || responseForErrorHandling.statusText,
          error.statusCode
        );
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw ErrorInstance.aborted();
      }

      if (error instanceof TypeError) {
        throw ErrorInstance.networkError();
      }
      if (ErrorInstance.isServerError(error)) {
        throw error;
      }
      throw ErrorInstance.networkError();
    }
  }

  /**
   * Функция для конвертации URL и добавления параметров запроса.
   *
   * @param {string} url - Базовый URL
   * @param {Record<string, string>} query - (необязательно) Добавляемые параметры запроса
   * @return {string} URL с добавленными параметрами
   */
  private convertUrl(url: string, query?: Record<string, string>) {
    return `${url}${this.createQueryParams(query || {})}`;
  }

  /**
   * Отправляет GET-запрос
   *
   * @param {string} url - URL, на котором выполняется GET-запрос
   * @param {U | undefined} query - параметры запроса
   * @param {RequestInit | undefined} config - (Необязательно) Дополнительные параметры конфигурации запроса
   * @return {Promise<ErrorInstance | ApiInterface<ArrayBuffer>>} Promise, разрешается либо ErrorInstance, либо ApiInterface<ArrayBuffer>.
   */
  async get<
    ArrayBuffer,
    U extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    query?: U,
    config?: RequestInit
  ): Promise<ApiInterface<ArrayBuffer> | ServerErrorImpl>;
  async get<
    T = string,
    U extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    query?: U,
    config?: RequestInit
  ): Promise<ApiInterface<T> | ServerErrorImpl>;
  async get<T, U extends Record<string, string> = Record<string, string>>(
    url: string,
    query?: U,
    config?: RequestInit
  ): Promise<ApiInterface<T> | ServerErrorImpl>;
  async get<T, U extends Record<string, string> = Record<string, string>>(
    url: string,
    query?: U,
    config: RequestInit = {}
  ) {
    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      method: "GET",
    });
  }

  /**
   * Отправляет delete-запрос
   *
   * @param {string} url - URL, на котором выполняется delete-запрос
   * @param {U | undefined} query - параметры запроса
   * @param {RequestInit | undefined} config - (необязательно) Дополнительный конфиг запроса
   * @return {Promise<ErrorInstance | ApiInterface<ArrayBuffer>>} Promise, разрешается либо ErrorInstance, либо ApiInterface<ArrayBuffer>.
   */
  async delete<
    ArrayBuffer,
    U extends Record<string, string> = Record<string, string>,
    D extends Record<string, any> = Record<string, any>,
  >(
    url: string,
    query?: U,
    body?: D,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;
  async delete<
    T = string,
    U extends Record<string, string> = Record<string, string>,
    D extends Record<string, any> = Record<string, any>,
  >(
    url: string,
    query?: U,
    body?: D,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async delete<
    T,
    U extends Record<string, string> = Record<string, string>,
    D extends Record<string, any> = Record<string, any>,
  >(
    url: string,
    query?: U,
    body?: D,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async delete<
    T,
    U extends Record<string, string> = Record<string, string>,
    D extends Record<string, any> = Record<string, any>,
  >(url: string, query?: U, body?: D, config: RequestInit = {}) {
    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      method: "DELETE",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * Выполняет put-запрос с переданными данными.
   *
   * @param {string} url - URL на который отправляется put-запрос.
   * @param {U} body - данные для отправки
   * @param {Q | undefined} query - (опционально) параметры запроса
   * @param {RequestInit | undefined} config - (опционально) дополнительный конфиг для запроса
   * @return {Promise<ErrorInstance | ApiInterface<ArrayBuffer>>} Promise, разрешается либо ErrorInstance, либо ApiInterface<ArrayBuffer>.
   */
  async put<
    ArrayBuffer,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;
  async put<
    T = string,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async put<
    T,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async put<T, U extends Record<string, any> = Record<string, string>>(
    url: string,
    body: U,
    query?: U,
    config: RequestInit = {}
  ) {
    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  /**
   * Отправляет POST-запрос на указанный URL с переданными данными.
   *
   * @param {string} url - URL, на который отправляются данные
   * @param {Record<string, any>} body - Данные для отправки
   * @param {Record<string, string>} query - (необязательно) Дополнительные параметры запроса
   * @param {RequestInit} config - (необязательно) Настройки для запроса
   * @return {Promise<ErrorInstance | ApiInterface<T | ArrayBuffer | string>>} Promise, который разрешается либо ErrorInstance, либо ApiInterface<T>, либо ApiInterface<ArrayBuffer> или ApiInterface<string>.
   */
  async post<
    ArrayBuffer,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;
  async post<
    T = string,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;

  async post<
    T,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;

  async post<T, U extends Record<string, any> = Record<string, string>>(
    url: string,
    body: U,
    query?: U,
    config: RequestInit = {}
  ) {
    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  /**
   * Выполняет patch-запрос с переданными данными.
   *
   * @param {string} url - URL, на который отправляется POST-запрос.
   * @param {U} body - Данные, отправляемые в теле запроса.
   * @param {Q} query - (Необязательно) Параметры запроса, включаемые в запрос.
   * @param {RequestInit} config - (Необязательно) Дополнительная конфигурация для запроса.
   * @return {Promise<ErrorInstance | ApiInterface<T | ArrayBuffer | string>>} Promise, который разрешается либо ErrorInstance, либо ApiInterface<T | ArrayBuffer | string>.
   */
  async patch<
    ArrayBuffer,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;

  async patch<
    T = string,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;

  async patch<
    T,
    U extends Record<string, any> = Record<string, string>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: U,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;

  async patch<T, U extends Record<string, any> = Record<string, string>>(
    url: string,
    body: U,
    query?: U,
    config: RequestInit = {}
  ) {
    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  /**
   * Выполняет PUT-запрос с FormData.
   *
   * @param {string} url - URL, на который отправляется PUT-запрос.
   * @param {FormData | D} body - Данные, отправляемые в теле запроса в формате FormData или Record<string, string> который будет преобразован в FormData.
   * @param {Q} query - (Необязательно) Параметры запроса, включаемые в запрос.
   * @param {RequestInit} config - (Необязательно) Дополнительная конфигурация для запроса.
   * @return {Promise<ErrorInstance | ApiInterface<ArrayBuffer>>} Promise, который разрешается либо ErrorInstance, либо ApiInterface<ArrayBuffer>.
   */
  async putFD<
    ArrayBuffer,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;

  async putFD<
    T extends string,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async putFD<
    T,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async putFD<
    T,
    D extends Record<string, any>,
    U extends Record<string, string> = Record<string, string>,
  >(url: string, body: FormData | D, query?: U, config: RequestInit = {}) {
    const formData = body instanceof FormData ? body : this.toFormData(body);

    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      headers: { ...config.headers, "Content-Type": "multipart/form-data" },
      method: "PUT",
      body: formData,
    });
  }

  /**
   * Выполняет POST-запрос с FormData.
   *
   * @param {string} url - URL, на который отправляется POST-запрос.
   * @param {FormData | D} body - Данные, отправляемые в теле запроса в формате FormData или Record<string, string> который будет преобразован в FormData.
   * @param {Q} query - (Необязательно) Параметры запроса, включаемые в запрос.
   * @param {RequestInit} config - (Необязательно) Дополнительная конфигурация для запроса.
   * @return {Promise<ErrorInstance | ApiInterface<ArrayBuffer>>} Promise, который разрешается либо ErrorInstance, либо ApiInterface<ArrayBuffer>.
   */
  async postFD<
    ArrayBuffer,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<ArrayBuffer>>;

  async postFD<
    T extends string,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async postFD<
    T,
    D extends Record<string, any>,
    Q extends Record<string, string> = Record<string, string>,
  >(
    url: string,
    body: FormData | D,
    query?: Q,
    config?: RequestInit
  ): Promise<ServerErrorImpl | ApiInterface<T>>;
  async postFD<
    T,
    D extends Record<string, any>,
    U extends Record<string, string> = Record<string, string>,
  >(url: string, body: FormData | D, query?: U, config: RequestInit = {}) {
    const formData = body instanceof FormData ? body : this.toFormData(body);

    return this.originalFetch<T>(this.convertUrl(url, query), {
      ...config,
      headers: { ...config.headers, "Content-Type": "multipart/form-data" },
      method: "POST",
      body: formData,
    });
  }
}

declare global {
  interface ApiInterface<T> {
    status: "success" | "error";
    requestId: string;
    response: {
      headers: Headers;
      status: number;
    };
    data: T;
    config: {
      method: string;
      url: string;
      headers: HeadersInit;
      body: string;
    };
  }
}
