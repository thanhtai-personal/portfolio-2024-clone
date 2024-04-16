import { makeContext } from "@ttt-core/react";
import { initialData } from "./initialData";
import {
  PortfolioActionType,
  IPortfolioContext,
  UpdateLoadingPayload,
} from "./interfaces";
import { IAction } from "..";

type PortfolioActionPayload = UpdateLoadingPayload;

// Define the reducer function
const reducer = (state: IPortfolioContext, action: IAction<PortfolioActionType, PortfolioActionPayload>): IPortfolioContext => {

  switch (action.type) {

    case PortfolioActionType.updateLoading: 
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state;
  }
};
// Create the counter context using makeContext
export const PortfolioContext = makeContext<IPortfolioContext, IAction<PortfolioActionType, PortfolioActionPayload>>(reducer, initialData);