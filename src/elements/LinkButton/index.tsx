import React from 'react';

import Typography from '../Typography';
import { Container } from './styles';

interface Props {
  text: string;
  onPress(): void;
}

const LinkButton: React.FC<Props> = ({ text, onPress }) => (
  <Container onPress={onPress}>
    <Typography color="Light" fontFamily="Light" size={18} text={text} />
  </Container>
);

export default LinkButton;
