import React from 'react';
import AppHeader from '../../components/AppHeader';
import { Button } from '../../elements';
import { useAuth } from '../../hooks/auth';

import { Container, NewPosteContainer } from './styles';
import FeedUI from './FeedUI';

const Home: React.FC = () => {
  const { username } = useAuth();

  return (
    <Container>
      <AppHeader username={username} />
      <FeedUI />
      <NewPosteContainer>
        <Button text="POSTAR" onPress={() => console.log('Novo Poste')} />
      </NewPosteContainer>
    </Container>
  );
};

export default Home;
