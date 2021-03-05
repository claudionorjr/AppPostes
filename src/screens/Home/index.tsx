import React from 'react';
import AppHeader from '../../components/AppHeader';
import { Button } from '../../elements';
import { useAuth } from '../../hooks/auth';

import { Container, NewPosteContainer } from './styles';
import Feed from './Feed';

const Home: React.FC = () => {
  const { username } = useAuth();

  return (
    <Container>
      <AppHeader username={username} />
      <Feed />
      <NewPosteContainer>
        <Button text="POSTAR" onPress={() => console.log('Novo Poste')} />
      </NewPosteContainer>
    </Container>
  );
};

export default Home;
