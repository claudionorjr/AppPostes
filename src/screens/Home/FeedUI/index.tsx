import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Post as TypePost } from '../../../@types/Post';
import { Loading } from '../../../components';
import { useAuth } from '../../../hooks/auth';
import { usePost } from '../../../hooks/post';
import Post from './Post';

import { Container } from './styles';

const FeedUI: React.FC = () => {
  const [posts, setPosts] = useState<TypePost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(true);
  const { token } = useAuth();
  const { getAllPosts } = usePost();

  useEffect(() => {
    setIsSubscribed(true);
    getAllPosts(token)
      .then(response => {
        isSubscribed && setPosts(response);
        isSubscribed && setIsLoading(false);
      })
      .catch(err => {
        console.log('GETALLPOSTS:', err);
        setIsLoading(true);
      });

    return () => setIsSubscribed(false);
  }, [token, getAllPosts]);

  const renderRow = useCallback(
    ({ item, index }: { item: TypePost; index: number }) => (
      <Post post={item} />
    ),
    [],
  );

  const renderFooter = useCallback(() => <Loading />, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `row-${item.id}`}
          renderItem={renderRow}
          ListFooterComponent={renderFooter}
        />
      )}
    </Container>
  );
};

export default React.memo(FeedUI);
