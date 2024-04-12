import { ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IReactApp, ReactApp } from "../dom";

export interface IAppWithRoute extends Omit<IReactApp, "App"> {
  router: IRouter[];
}

export interface IRouter {
  path: string;
  element: ReactNode;
}

export interface IAppRouteProps {
  router: IRouter[];
}

export const buildAppRoute: (router: IRouter[]) => any = (router: IRouter[]) =>
  createBrowserRouter(router);

export const AppRouter: React.FC<IAppRouteProps> = ({ router }) => {
  const _router = buildAppRoute(router);

  return <RouterProvider router={_router} />;
};

export const AppWithRoute = ({
  rootId,
  providers,
  strictMode,
  router,
}: IAppWithRoute) => {
  ReactApp({
    strictMode: strictMode,
    providers: providers,
    rootId: rootId,
    renderedApp: <AppRouter router={router} />,
  })
};
