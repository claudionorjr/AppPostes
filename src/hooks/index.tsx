import React from 'react';
import { AuthProvider } from './auth';
import { PostProvider } from './post';
import { ReactionProvider } from './reaction';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PostProvider>
      <ReactionProvider>{children}</ReactionProvider>
    </PostProvider>
  </AuthProvider>
);

export default AppProvider;
