import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Typography } from '../../elements';
import capitalizedString from '../../helpers/capitalizedString';
import normalizePixel from '../../helpers/normalizePixel';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerLogOut } from './styled';

interface Props {
  username: string;
}

const AppHeader: React.FC<Props> = ({ username }) => {
  const { signOut } = useAuth();
  return (
    <Container>
      <ContainerLogOut onPress={signOut}>
        <Icon name="arrow-left" size={normalizePixel(15)} color="#828587" />
        <Typography color="Light" fontFamily="Light" size={15} text="Sair" />
      </ContainerLogOut>
      <Typography
        color="White"
        fontFamily="Regular"
        size={16}
        text={capitalizedString(username)}
      />
    </Container>
  );
};

export default AppHeader;
