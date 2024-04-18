import { Suspense, lazy } from "react";
import { LoadingComponent } from "@/components/index";

const HomePage = lazy(() => import("@/containers/home"));
const PortfolioPage = lazy(() => import("@/containers/portfolio"));

export const router = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent loadingPage />}>
        <PortfolioPage />
      </Suspense>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <Suspense fallback={<LoadingComponent loadingPage />}>
        <PortfolioPage />
      </Suspense>
    ),
  },
  {
    path: "/universe",
    element: (
      <Suspense fallback={<LoadingComponent loadingPage />}>
        <HomePage />
      </Suspense>
    ),
  },
];
