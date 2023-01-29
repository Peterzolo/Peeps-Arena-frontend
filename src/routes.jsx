import { useRoutes } from 'react-router-dom';
import AuthTab from './pages/auth/authTab/authTab';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTab />
    }
  ]);

  return elements;
};
