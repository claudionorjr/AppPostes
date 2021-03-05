import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../../elements';
import { useAuth } from '../../../hooks/auth';

import { Container } from './styles';

const Feed: React.FC = () => {
  const { username } = useAuth();

  return (
    <Container>
      <Text>JIOSADJIOASJIDOSAIO</Text>
    </Container>
  );
};

export default Feed;
