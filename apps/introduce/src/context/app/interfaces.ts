export enum AppActionType {
}

export interface IAction<T, K> {
  type: T,
  payload: K;
}



// Define the state type
export interface IAppContext {
}