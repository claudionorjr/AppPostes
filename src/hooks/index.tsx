import React from 'react';
import { AuthProvider } from './auth';
import { PostProvider } from './post';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PostProvider>{children}</PostProvider>
  </AuthProvider>
);

export default AppProvider;
