export type Maybe<T> = T | unknown;

const ERROR_MESSAGE = {
  UNAUTHORIZED: "Не авторизован",
  NOT_FOUND: "Не найдено",
  ABORTED: "Запрос отменен",
  NETWORK_ERROR: "Ошибка сети",
  UNKNOWN: "Неизвестная ошибка",
};

const ERROR_CODE = {
  UNAUTHORIZED: "UNAUTHORIZED",
  NOT_FOUND: "NOT_FOUND",
  ABORTED: "ABORTED",
  NETWORK_ERROR: "NETWORK_ERROR",
  UNKNOWN: "UNKNOWN",
};
export class ServerErrorImpl implements ServerError {
  constructor(
    public message: string[] | string,
    public error: string,
    public statusCode: number
  ) {
    this.message = message;
    this.error = error;
    this.statusCode = statusCode;
  }

  /** Methods */
  public getMessage() {
    return this.message;
  }

  public getError() {
    return this.error;
  }

  public getStatusCode() {
    return this.statusCode;
  }

  public getMessageByCode(code: string) {
    if (Object.prototype.hasOwnProperty.call(ERROR_MESSAGE, code)) {
      return ERROR_MESSAGE[code as keyof typeof ERROR_MESSAGE];
    }
    return ERROR_MESSAGE.UNKNOWN;
  }

  public getErrorByCode(code: string) {
    if (Object.prototype.hasOwnProperty.call(ERROR_CODE, code)) {
      return ERROR_CODE[code as keyof typeof ERROR_CODE];
    }
    return ERROR_CODE.UNKNOWN;
  }

  public getStatusCodeByCode(code: string) {
    if (Object.prototype.hasOwnProperty.call(ERROR_CODE, code)) {
      return ERROR_CODE[code as keyof typeof ERROR_CODE];
    }
    return 500;
  }
  /**
   * unknown
   */
  public unknown() {
    return new ServerErrorImpl(
      [ERROR_MESSAGE.UNKNOWN],
      ERROR_CODE.UNKNOWN,
      500
    );
  }

  /**
   * notFound
   */
  public notFound() {
    return new ServerErrorImpl(
      [ERROR_MESSAGE.NOT_FOUND],
      ERROR_CODE.NOT_FOUND,
      404
    );
  }

  /**
   * notAuthorized
   */
  public notAuthorized() {
    return new ServerErrorImpl(
      [ERROR_MESSAGE.UNAUTHORIZED],
      ERROR_CODE.UNAUTHORIZED,
      401
    );
  }

  /**
   * networkError
   */
  public networkError() {
    return new ServerErrorImpl(
      [ERROR_MESSAGE.NETWORK_ERROR],
      ERROR_CODE.NETWORK_ERROR,
      500
    );
  }

  /**
   * aborted
   */
  public aborted() {
    return new ServerErrorImpl(
      [ERROR_MESSAGE.ABORTED],
      ERROR_CODE.ABORTED,
      400
    );
  }

  /**
   * create
   */
  public create(
    message: string,
    error: string = ERROR_CODE.UNKNOWN,
    statusCode: number = 500
  ) {
    return new ServerErrorImpl([message], error, statusCode);
  }

  /**
   * To object
   * @returns {ServerError}
   * @memberof ServerError
   * @example
   * const error = new ServerErrorImpl("message", "error", 500);
   * error.toObject();
   * // { error: "error", message: "message", statusCode: 500 }
   * error.unknown().toObject();
   * // { error: "Неизвестная ошибка", message: "Неизвестная ошибка", statusCode: 500 }
   */
  public toObject(): ServerError {
    return {
      error: this.error,
      message: this.message,
      statusCode: this.statusCode,
    };
  }

  /**
   * From ServerError object
   * @returns {ServerErrorImpl}
   * @memberof ServerError
   * @example
   * const error = new ServerErrorImpl("message", "error", 500);
   * error.fromObject({ error: "error", message: "message", statusCode: 500 });
   * // ServerErrorImpl { error: "error", message: "message", statusCode: 500 }
   */
  public fromObject(obj: ServerError): ServerErrorImpl {
    return new ServerErrorImpl(obj.message, obj.error, obj.statusCode);
  }

  /**
   * isServerError
   * @param {ServerError} res
   * @returns {boolean}
   * @memberof ServerError
   * @example
   * const error = new ServerErrorImpl("message", "error", 500);
   * error.isServerError({ error: "error", message: "message", statusCode: 500 });
   * // true
   * error.isServerError({ error: "error", message: "message", statusCode: 400 });
   * // false
   */
  public isServerError(res: Maybe<ServerError>): res is ServerError {
    return (
      typeof res === "object" &&
      !!res &&
      "statusCode" in res &&
      "message" in res &&
      "error" in res
    );
  }
}

declare global {
  interface ServerError {
    message: string | string[];
    error: string;
    statusCode: number;
  }
}

const serverError = new ServerErrorImpl([], "Неизвестная ошибка", 500);
export default serverError;
