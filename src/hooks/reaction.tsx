import React, { createContext, useCallback, useContext } from 'react';

import { reactionService } from '../services';
import { Post } from '../@types/Post';

interface ReactionContextData {
  reactionLoveIt(token: string, post: Post): Promise<number | string>;
  reactionLikeIt(token: string, post: Post): Promise<number | string>;
}

const ReactionContext = createContext<ReactionContextData>(
  {} as ReactionContextData,
);

const ReactionProvider: React.FC = ({ children }) => {
  const reactionLoveIt = useCallback(async (token: string, post: Post) => {
    const status = await reactionService({
      token,
      feedId: post.id,
      love: post.activeUserLikedIt === 0,
      like: post.activeUserLikedIt !== 0,
    });
    return status;
  }, []);

  const reactionLikeIt = useCallback(async (token: string, post: Post) => {
    const status = await reactionService({
      token,
      feedId: post.id,
      love: post.activeUserLovedIt !== 0,
      like: post.activeUserLovedIt === 0,
    });
    return status;
  }, []);

  return (
    <ReactionContext.Provider
      value={{
        reactionLoveIt,
        reactionLikeIt,
      }}
    >
      {children}
    </ReactionContext.Provider>
  );
};

const useReaction = (): ReactionContextData => {
  const context = useContext(ReactionContext);

  if (!context) {
    throw new Error('useReaction must be used within an ReactionProvider');
  }

  return context;
};

export { ReactionProvider, useReaction };
