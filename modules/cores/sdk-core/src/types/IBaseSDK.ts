// import { IAbstractService } from "./IAbstractService.js";
import { TokenMethod } from "@ttt-ui/api-client/src/index.js";
import { Pagination } from "./Pagination.js";
import { IErrorResponse } from "./IErrorResponse.js";

export interface IBaseControl<ICreationRequest, IUpdatingRequest, IDataResponse, IFilterRequest> {
  create: (createData: ICreationRequest) => Promise<IDataResponse | IErrorResponse>;
  update: (
    id: string | number,
    updateData: IUpdatingRequest,
  ) => Promise<IDataResponse | IErrorResponse>;
  getOne: (id: string | number) => Promise<IDataResponse | IErrorResponse>;
  getMany: (filter: IFilterRequest) => Promise<Pagination<IDataResponse> | IErrorResponse>;
  delete: (
    id: string | number,
  ) => Promise<void | IErrorResponse>;
}

export interface IBaseSDK {
  setAccessToken: (token: string, tokenMethod: TokenMethod) => void;
}