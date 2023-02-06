import { useRoutes } from 'react-router-dom';
import { ForgotPassword } from './pages/auth/auth-tab/forgot-password/ForgotPassword';
import { AuthTab } from './pages/auth/index';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTab />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]);

  return elements;
};
