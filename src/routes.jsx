import { useRoutes } from 'react-router-dom';
import { ForgotPassword, Login, PasswordReset, Register } from '@pages/auth/index';
import Streams from '@pages/social/streams/Streams';
import Social from '@pages/social/Social';
import Chart from './pages/chart/Chart';
import People from './pages/people/People';
import Followers from './pages/followers/Followers';
import Following from './pages/following/Following';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
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
      element: <Social />,
      children: [
        { path: 'streams', element: <Streams /> },
        { path: 'people', element: <People /> },
        { path: 'followers', element: <Followers /> },
        { path: 'following', element: <Following /> },
        { path: 'chat/message', element: <Chart /> },
        { path: 'chat/message', element: <Chart /> }
      ]
    }
  ]);

  return elements;
};
