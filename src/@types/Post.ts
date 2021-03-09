interface Post {
  activeUserLikedIt: number;
  activeUserLovedIt: number;
  author: {
    id: number;
    username: string;
  };
  content: string;
  createdAt: Date;
  id: number;
  likes: number;
  loves: number;
  updatedAt: Date;
}

interface PostRequest {
  token: string;
  content: string;
}

interface PostResponse {
  activeUserLikedIt: number;
  activeUserLovedIt: number;
  author: {
    id: number;
    username: string;
  };
  content: string;
  createdAt: Date;
  id: number;
  likes: number;
  loves: number;
  updatedAt: Date;
}

export type { Post, PostRequest, PostResponse };
