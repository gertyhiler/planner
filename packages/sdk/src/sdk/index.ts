import { FetchInstance, type FetchInstanceConfig } from "@/libs/fetch/instance";
import { AuthApi } from "./auth";

export default class SDK extends FetchInstance {
  constructor(config: FetchInstanceConfig) {
    super(config);
  }

  public auth = AuthApi(this);
}
