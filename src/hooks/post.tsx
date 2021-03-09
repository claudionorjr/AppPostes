import React, { createContext, useCallback, useContext } from 'react';

import { createPostService, postsService } from '../services';
import { PostRequest, PostResponse } from '../@types/Post';

interface PostContextData {
  createPost(daties: PostRequest): Promise<number | string>;
  getAllPosts(token: string): Promise<PostResponse[]>;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider: React.FC = ({ children }) => {
  const createPost = useCallback(async (daties: PostRequest) => {
    const status = await createPostService(daties);
    return status;
  }, []);

  const getAllPosts = useCallback(async (token: string) => {
    const response = await postsService(token);
    return response;
  }, []);

  return (
    <PostContext.Provider
      value={{
        createPost,
        getAllPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = (): PostContextData => {
  const context = useContext(PostContext);

  if (!context) throw new Error('usePost must be used within an PostProvider');

  return context;
};

export { PostProvider, usePost };
