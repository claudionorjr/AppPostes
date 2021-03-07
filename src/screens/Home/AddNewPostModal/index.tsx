import React, { useCallback, useState } from 'react';
import { Modal } from 'react-native';

import { Button, Typography } from '../../../elements';
import { usePost } from '../../../hooks/post';
import { useAuth } from '../../../hooks/auth';
import { Container, ContentContainer, CloseBtn } from './styles';

interface Props {
  isVisible: boolean;
  onClose(): void;
}

const AddNewPostModal: React.FC<Props> = ({ isVisible, onClose }) => {
  const [status, setStatus] = useState<string | number>();
  const [textChange, setTextChange] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { createPost } = usePost();
  const { token } = useAuth();

  const onCreatePost = useCallback(() => {
    createPost({ content: textChange, token })
      .then(response => {
        setStatus(response);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('CREATEPOST:', err);
        setIsLoading(true);
      });
    (status == '201' || status == '200') && onClose();
  }, [token, createPost]);

  const onChangeText = useCallback((text: string) => {
    console.log(text);
    setTextChange(text);
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Container>
        <CloseBtn onPress={onClose}>
          <Typography text="x" color="White" fontFamily="Light" size={32} />
        </CloseBtn>
        <ContentContainer
          placeholder="Digite seu post..."
          placeholderTextColor="#666360"
          multiline
          onChangeText={onChangeText}
        />
        <Button
          text={isLoading ? 'Postar' : 'Carregando...'}
          disabled={!isLoading}
          onPress={onCreatePost}
        />
      </Container>
    </Modal>
  );
};

export default AddNewPostModal;
