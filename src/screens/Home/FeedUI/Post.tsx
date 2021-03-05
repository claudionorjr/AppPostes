import React from 'react';
import { Text } from 'react-native';
import Feed from '../../../@types/Feed';
import { useAuth } from '../../../hooks/auth';

import { PostContainer } from './styles';

interface Props {
  post: Feed;
}

const Post: React.FC<Props> = ({ post }) => {
  const { username } = useAuth();

  return (
    <PostContainer>
      <Text>{post.content}</Text>
    </PostContainer>
  );
};

export default Post;
