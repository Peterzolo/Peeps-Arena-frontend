import { useRoutes } from 'react-router-dom';
import { ForgotPassword, Login, PasswordReset, Register } from '@pages/auth/index';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/'
      // element: />
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
    },
    {
      path: '/reset-password',
      element: <PasswordReset />
    }
  ]);

  return elements;
};
