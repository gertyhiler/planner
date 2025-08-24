import { ApiInterface, FetchInstance } from "../../libs/fetch/instance";
import { AuthRequest, AuthResponse, AuthResponseSchema } from "@planner/types";
import { ServerErrorImpl } from "../../libs/fetch/error";

export const AuthApi = (fetcher: FetchInstance) => ({
  login: async (
    email: string,
    password: string
  ): Promise<ApiInterface<AuthResponse>> => {
    const response = await fetcher.post<AuthResponse, AuthRequest>("/auth", {
      email,
      password,
    });

    if (response instanceof ServerErrorImpl) {
      throw response;
    }

    const { data, success } = AuthResponseSchema.safeParse(response.data);
    if (!success) {
      throw new ServerErrorImpl([], "Invalid response", 400);
    }
    return { ...response, data };
  },
});
