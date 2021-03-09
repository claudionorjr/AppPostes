import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';
import { Loading } from '../components';

const Routes: React.FC = () => {
  const { username, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return username ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
