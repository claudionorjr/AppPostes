import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import User from '../@types/User';
import { authService, createAccountService } from '../services';

interface AuthState {
  token: string;
  username: string;
}

interface AuthContextData {
  username: string;
  token: string;
  isLoading: boolean;
  signIn(credentials: User): Promise<void>;
  signOut(): void;
  createAccount(credentials: User): Promise<string | number>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorage(): Promise<void> {
      const [token, username] = await AsyncStorage.multiGet([
        '@appPostes:token',
        '@appPostes:username',
      ]);

      if (token[1] && username[1]) {
        setAuthData({ token: token[1], username: username[1] });
      }
      setIsLoading(false);
    }
    loadStorage();
  }, []);

  const signIn = useCallback(async (data: User) => {
    const token = await authService(data);
    await AsyncStorage.multiSet([
      ['@appPostes:token', token],
      ['@appPostes:username', data.username],
    ]);

    setAuthData({ token, username: data.username });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@appPostes:token', '@appPostes:username']);
    setAuthData({} as AuthState);
  }, []);

  const createAccount = useCallback(async (data: User) => {
    const response = await createAccountService(data);
    return response;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username: authData.username,
        token: authData.token,
        isLoading,
        signIn,
        signOut,
        createAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
