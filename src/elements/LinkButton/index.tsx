import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Typography from '../Typography';
import { Container } from './styles';

interface Props {
  text: string;
  onPress(): void;
  iconName?: string;
}

const LinkButton: React.FC<Props> = ({ text, iconName, onPress }) => (
  <Container isWithIcon={!!iconName} onPress={onPress}>
    {iconName != null && <Icon name={iconName} size={20} color="#666360" />}
    <Typography
      color={iconName ? 'Normal' : 'Light'}
      fontFamily="Light"
      size={18}
      text={text}
    />
  </Container>
);

export default LinkButton;
