import api from './api';
import { ReactionRequest } from '../@types/Reaction';

const reactionService = async (daties: ReactionRequest): Promise<any> => {
  const response = await api.post<any>(
    '/reaction',
    {
      feedId: daties.feedId,
      like: daties.like,
      love: daties.love,
    },
    {
      headers: {
        Authorization: `Bearer ${daties.token}`,
      },
    },
  );
  return response.status;
};

export { reactionService };
