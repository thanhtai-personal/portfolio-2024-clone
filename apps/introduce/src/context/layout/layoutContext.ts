import { makeContext } from "@ttt/react-core";
import { initialData } from "./initialData";
import {
  LayoutActionType,
  ILayoutContext,
  ILayoutAction,
} from "./interfaces";

type LayoutActionPayload = {}

// Define the reducer function
const reducer = (state: ILayoutContext, action: ILayoutAction<LayoutActionType, LayoutActionPayload>): ILayoutContext => {

  switch (action.type) {
    default:
      return state;
  }
};

// Create the counter context using makeContext
export const LayoutContext = makeContext<ILayoutContext, ILayoutAction<LayoutActionType, LayoutActionPayload>>(reducer, initialData);