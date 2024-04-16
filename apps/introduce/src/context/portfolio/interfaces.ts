export enum PortfolioActionType {
  updateLoading = "UPDATE_LOADING"
}

export type UpdateLoadingPayload = {
  loading: boolean;
}

// Define the state type
export interface IPortfolioContext {
  loading?: boolean;
}