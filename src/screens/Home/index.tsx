import React, { useCallback, useState } from 'react';

import AppHeader from '../../components/AppHeader';
import { Button } from '../../elements';
import { useAuth } from '../../hooks/auth';
import { Container, NewPosteContainer } from './styles';
import FeedUI from './FeedUI';
import AddNewPostModal from './AddNewPostModal';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isNewRequest, setIsNewRequest] = useState<boolean>(true);
  const { username } = useAuth();

  const handleVisible = useCallback(() => setIsVisible(!isVisible), [
    isVisible,
  ]);

  const handleNewRequest = useCallback(() => setIsNewRequest(!isNewRequest), [
    isNewRequest,
  ]);

  return (
    <Container>
      <AppHeader username={username} />
      <FeedUI newRequest={isNewRequest} />
      <NewPosteContainer>
        <Button text="" onPress={handleVisible} isAddPost />
      </NewPosteContainer>
      <AddNewPostModal
        isVisible={isVisible}
        onClose={handleVisible}
        onPress={handleNewRequest}
      />
    </Container>
  );
};

export default Home;
