import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Typography } from '../../elements';
import normalizePixel from '../../helpers/normalizePixel';
import { Container, ContainerIcon, ContainerTitle } from './styled';

interface Props {
  title: string;
}

const OutAppHeader: React.FC<Props> = ({ title }) => (
  <Container>
    <ContainerIcon>
      <Icon name="feather" size={normalizePixel(40)} color="#d9408a" />
      <Typography color="White" fontFamily="Medium" size={22} text="AppPosts" />
    </ContainerIcon>
    <ContainerTitle>
      <Typography color="White" fontFamily="Regular" size={20} text={title} />
    </ContainerTitle>
  </Container>
);

export default OutAppHeader;
