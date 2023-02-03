import { useRoutes } from 'react-router-dom';
// import AuthTab from './pages/auth/authTab/authTab';
import BlankSlate from './pages/auth/authTab/BlankSlate';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <BlankSlate />
    }
  ]);

  return elements;
};
