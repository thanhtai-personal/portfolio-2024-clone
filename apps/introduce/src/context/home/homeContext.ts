import { makeContext } from "@ttt-core/react";
import { initialData } from "./initialData";
import {
  HomeActionType,
  IHomeContext,
  UpdateActionPane,
  UpdateActiveSectionPayload,
} from "./interfaces";
import { IAction } from "..";
import { goToSection } from "@/utils/index";

type HomeActionPayload = UpdateActiveSectionPayload & UpdateActionPane;

// Define the reducer function
const reducer = (state: IHomeContext, action: IAction<HomeActionType, HomeActionPayload>): IHomeContext => {

  switch (action.type) {
    case HomeActionType.updateActiveSection:
      action.payload.value && goToSection(action.payload.value)
      return {
        ...state,
        activeSection: action.payload.value || state.activeSection
      }
    case HomeActionType.openActionPane:
      return {
        ...state,
        isOpenActionPane: action.payload.isOpenActionPane
      }
    default:
      return state;
  }
};
// Create the counter context using makeContext
export const HomeContext = makeContext<IHomeContext, IAction<HomeActionType, HomeActionPayload>>(reducer, initialData);