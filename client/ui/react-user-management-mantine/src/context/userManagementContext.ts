import { ContextData, makeContext, IAction } from "@ttt-ui/react-context"

export enum UserManagementActionType {
  INIT_STATE = "init_state",
}

export interface IUserManagementContext {
  languages?: { [key: string]: { [key: string]: string } }; // { [language key]: { [text key]: text value }}
  languageKey?: string;
  themeKey?: string;
}

type UserManagementActionPayload = Partial<IUserManagementContext> & {
  newKey?: string;
};

const reducer = (state: IUserManagementContext, action: IAction<UserManagementActionType, UserManagementActionPayload>): IUserManagementContext => {

  switch (action.type) {
    case UserManagementActionType.INIT_STATE:
      return action.payload;
    default:
      return state;
  }
};

export const UserManagementContext: ContextData<IUserManagementContext, IAction<UserManagementActionType, UserManagementActionPayload>> =
  makeContext<IUserManagementContext, IAction<UserManagementActionType, UserManagementActionPayload>>(reducer, {});