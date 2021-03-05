import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import Typography from '../Typography';
import { Container } from './styles';

interface Props extends RectButtonProperties {
  text: string;
}

const Button: React.FC<Props> = ({ text, ...rest }) => (
  <Container {...rest}>
    <Typography color="White" fontFamily="Medium" size={22} text={text} />
  </Container>
);

export default Button;
