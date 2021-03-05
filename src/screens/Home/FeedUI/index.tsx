import React from 'react';
import { FlatList } from 'react-native';
import Feed from '../../../@types/Feed';
import { useAuth } from '../../../hooks/auth';
import Post from './Post';

import { Container } from './styles';

const mockList: Feed[] = [
  {
    authorId: 0,
    content: 'string',
  },
  {
    authorId: 1,
    content: 'string',
  },
  {
    authorId: 2,
    content: 'string',
  },
  {
    authorId: 3,
    content: 'string',
  },
  {
    authorId: 4,
    content: 'string',
  },
  {
    authorId: 5,
    content: 'string',
  },
  {
    authorId: 5,
    content: 'string',
  },
  {
    authorId: 7,
    content: 'string',
  },
  {
    authorId: 8,
    content: 'string',
  },
  {
    authorId: 9,
    content: 'string',
  },
  {
    authorId: 10,
    content: 'string',
  },
  {
    authorId: 11,
    content: 'string',
  },
  {
    authorId: 12,
    content: 'string',
  },
  {
    authorId: 13,
    content: 'string',
  },
  {
    authorId: 14,
    content: 'string',
  },
  {
    authorId: 15,
    content: 'string',
  },
  {
    authorId: 16,
    content: 'string',
  },
  {
    authorId: 17,
    content: 'string',
  },
  {
    authorId: 18,
    content: 'string',
  },
  {
    authorId: 19,
    content: 'string',
  },
  {
    authorId: 20,
    content: 'string',
  },
  {
    authorId: 21,
    content: 'string',
  },
  {
    authorId: 22,
    content: 'string',
  },
  {
    authorId: 23,
    content: 'string',
  },
  {
    authorId: 24,
    content: 'string',
  },
  {
    authorId: 25,
    content: 'string',
  },
  {
    authorId: 26,
    content: 'string',
  },
  {
    authorId: 27,
    content: 'string',
  },
];

const FeedUI: React.FC = () => {
  const { username } = useAuth();

  const renderRow = (post: Feed) => <Post post={post} />;

  return (
    <Container>
      <FlatList
        data={mockList}
        keyExtractor={item => `row-${item.authorId}`}
        renderItem={({ item }) => renderRow(item)}
      />
    </Container>
  );
};

export default FeedUI;
