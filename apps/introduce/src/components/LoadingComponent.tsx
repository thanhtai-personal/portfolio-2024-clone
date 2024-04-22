import { ReactNode } from "react";

export interface ILoadingComponent {
  loadingPage?: boolean;
  children?: ReactNode;
}

export const LoadingComponent = ({ loadingPage, children }: ILoadingComponent) => {

  return <div className={`flex justify-center items-center ${loadingPage ? "w-screen h-screen" : "w-full h-full"}`}>
    {children}
  </div>
}