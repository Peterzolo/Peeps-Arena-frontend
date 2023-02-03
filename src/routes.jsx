import { useRoutes } from 'react-router-dom';
import AuthTam from './pages/auth/auth-tab/AuthTam';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTam />
    }
  ]);

  return elements;
};
