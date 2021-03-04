import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Typography } from '../../elements';
import { Container, ContainerIcon, ContainerTitle } from './styled';

interface Props {
  title: string;
}

const OutAppHeader: React.FC<Props> = ({ title }) => (
  <Container>
    <ContainerIcon>
      <Icon name="feather" size={40} color="#000" />
      <Typography
        color="Normal"
        fontFamily="Medium"
        size={22}
        text="AppPostes"
      />
    </ContainerIcon>
    <ContainerTitle>
      <Typography color="Normal" fontFamily="Regular" size={20} text={title} />
    </ContainerTitle>
  </Container>
);

export default OutAppHeader;
