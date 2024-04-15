import { makeContext } from "@ttt-core/react";
import { initialData } from "./initialData";
import {
  AppActionType,
  IAppContext,
  IAction,
} from "./interfaces";
type AppActionPayload = {}

// Define the reducer function
const reducer = (state: IAppContext, action: IAction<AppActionType, AppActionPayload>): IAppContext => {
  switch (action.type) {
    default:
      return state;
  }
};
// Create the counter context using makeContext
export const AppContext = makeContext<IAppContext, IAction<AppActionType, AppActionPayload>>(reducer, initialData);