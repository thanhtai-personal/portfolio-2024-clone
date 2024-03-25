import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export const AppRoute = () => {
  return <RouterProvider router={router} />;
};
