import { HttpErrorCode } from "@ttt-ui/api-client/src/index.js";
import { IErrorResponse } from "./IErrorResponse.js";

export interface IResponse<IDataResponse> {
  code?: HttpErrorCode | 200;
  message?: string;
  data: IDataResponse | IErrorResponse;
}
