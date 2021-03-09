import React, { useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-native';

import { Button, Typography } from '../../../elements';
import { usePost } from '../../../hooks/post';
import { useAuth } from '../../../hooks/auth';
import { Container, ContentContainer, CloseBtn } from './styles';

interface Props {
  isVisible: boolean;
  onClose(): void;
  onPress(): void;
}

const AddNewPostModal: React.FC<Props> = ({ isVisible, onClose, onPress }) => {
  const [textChange, setTextChange] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isErrored, setIsErrored] = useState<boolean>(true);
  const { createPost } = usePost();
  const { token } = useAuth();

  useEffect(() => {
    setIsErrored(false);
    setIsLoading(true);
  }, []);

  const onCreatePost = useCallback(() => {
    textChange !== ''
      ? createPost({ content: textChange, token })
          .then(() => {
            setIsLoading(false);
            onPress();
            onClose();
          })
          .catch(err => {
            console.log('CREATEPOST:', err);
            setIsLoading(true);
          })
      : setIsErrored(true);
  }, [token, textChange]);

  const onChangeText = useCallback((text: string) => {
    setIsErrored(false);
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
        <CloseBtn testID="close-modal" onPress={onClose}>
          <Typography text="x" color="White" fontFamily="Light" size={32} />
        </CloseBtn>
        <ContentContainer
          isErrored={isErrored}
          placeholder="Digite seu post..."
          placeholderTextColor="#666360"
          multiline
          onChangeText={onChangeText}
        />
        <Button
          testID="button-to-create-post"
          text={isVisible ? 'Postar' : 'Carregando...'}
          disabled={!isVisible}
          onPress={onCreatePost}
        />
      </Container>
    </Modal>
  );
};

export default AddNewPostModal;
