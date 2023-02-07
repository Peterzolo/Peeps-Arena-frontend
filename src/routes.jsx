import { useRoutes } from 'react-router-dom';
import { AuthTab, ForgotPassword, Login, Register } from './pages/auth/index';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTab />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]);

  return elements;
};
