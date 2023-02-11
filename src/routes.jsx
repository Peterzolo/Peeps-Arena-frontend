import { useRoutes } from 'react-router-dom';
import { ForgotPassword, Login, PasswordReset, Register } from '@pages/auth/index';
import Streams from '@pages/social/streams/Streams';

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
    },
    {
      path: '/app/social',
      element: <Streams />
    }
  ]);

  return elements;
};
