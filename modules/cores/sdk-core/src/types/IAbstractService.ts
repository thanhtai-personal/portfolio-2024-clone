import { APIResult } from "@ttt-ui/api-client/src/API.js";
import { IResponse } from "./IResponse.js";
import { Pagination } from "./Pagination.js";

export interface IAbstractService<ICreactionRequest, IUpdatingRequest, IDataResponse, IFilterRequest> {
  create: (createData: ICreactionRequest) => Promise<APIResult<IResponse<IDataResponse>>>;
  update: (
    id: string | number,
    updateData: IUpdatingRequest,
  ) => Promise<APIResult<IResponse<IDataResponse>>>;
  getOne: (id: string | number) => Promise<APIResult<IResponse<IDataResponse>>>;
  getMany: (filter: IFilterRequest) => Promise<APIResult<IResponse<Pagination<IDataResponse>>>>;
  delete: (
    id: string | number,
  ) => Promise<APIResult<IResponse<void>>>;
}
