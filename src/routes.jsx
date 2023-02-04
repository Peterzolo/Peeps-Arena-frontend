import { useRoutes } from 'react-router-dom';
import { AuthTab } from './pages/auth/index';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTab />
    }
  ]);

  return elements;
};
