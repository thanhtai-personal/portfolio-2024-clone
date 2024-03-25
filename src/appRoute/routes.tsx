import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('@/containers/home'));


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback="loading">
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/home',
    element: (
      <Suspense fallback="loading">
        <HomePage />
      </Suspense>
    ),
  },
]);
