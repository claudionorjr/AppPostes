import api from './api';
import User from '../@types/User';

const authService = async (body: User): Promise<string> => {
  const response = await api.post<string>('/sign-in', body);
  return response.data;
};

const createAccountService = async (body: User): Promise<string | number> => {
  const response = await api.post<string | number>('/sign-up', body);
  return response.status;
};

const forgotPasswordService = async (username: string): Promise<User> => {
  const response = await api.get<User>(`/forgot-password/${username}`);
  console.log(response.data);
  return response.data;
};

export { authService, createAccountService, forgotPasswordService };
