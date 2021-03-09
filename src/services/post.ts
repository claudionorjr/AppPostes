import api from './api';
import { PostRequest, PostResponse } from '../@types/Post';

const postsService = async (token: string): Promise<PostResponse[]> => {
  const response = await api.get<PostResponse[]>('/feeds', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const createPostService = async (
  daties: PostRequest,
): Promise<string | number> => {
  const response = await api.post<string | number>(
    '/feed',
    {
      content: daties.content,
    },
    {
      headers: {
        Authorization: `Bearer ${daties.token}`,
      },
    },
  );
  return response.status;
};

export { postsService, createPostService };
