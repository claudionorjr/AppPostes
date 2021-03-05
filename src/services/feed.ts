import api from './api';
import Feed from '../@types/Feed';

const feedsService = async (): Promise<Feed[]> => {
  const response = await api.post<Feed[]>('/feeds');
  return response.data;
};

const createFeedService = async (content: string): Promise<string | number> => {
  const response = await api.post<string | number>('/feed', { content });
  return response.status;
};

export { feedsService, createFeedService };
