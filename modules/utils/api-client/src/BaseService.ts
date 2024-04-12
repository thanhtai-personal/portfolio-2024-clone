import { FetchApi } from "./createApi.js";

export abstract class BaseService<Paths> {
  constructor(protected api: FetchApi<Paths>) {}
}
