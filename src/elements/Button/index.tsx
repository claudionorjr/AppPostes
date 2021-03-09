import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import normalizePixel from '../../helpers/normalizePixel';

import Typography from '../Typography';
import {
  Container,
  linearGradient,
  ContainerBtnAddPost,
  linearGradientAddPost,
} from './styles';

interface Props {
  text: string;
  onPress(): void;
  isAddPost?: boolean;
  disabled?: boolean | undefined;
  testID?: string;
}

const Button: React.FC<Props> = ({
  text,
  onPress,
  isAddPost,
  disabled,
  testID,
}) => (
  <Container
    testID={testID}
    isAddPost={isAddPost}
    onPress={onPress}
    disabled={disabled}
  >
    {isAddPost ? (
      <ContainerBtnAddPost>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#FC0B7B', '#7820AD']}
          style={linearGradientAddPost}
        >
          <Icon name="plus" size={normalizePixel(32)} color="#fff" />
        </LinearGradient>
      </ContainerBtnAddPost>
    ) : (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#FC0B7B', '#7820AD']}
        style={linearGradient}
      >
        <Typography color="White" fontFamily="Medium" size={22} text={text} />
      </LinearGradient>
    )}
  </Container>
);

export default Button;
