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

export { authService, createAccountService };
