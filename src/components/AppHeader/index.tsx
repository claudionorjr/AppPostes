import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Typography } from '../../elements';
import capitalizedString from '../../helpers/capitalizedString';
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
        <Icon name="arrow-left" size={22} color="#828587" />
        <Typography color="Light" fontFamily="Light" size={18} text="Sair" />
      </ContainerLogOut>
      <Typography
        color="Normal"
        fontFamily="Medium"
        size={22}
        text={`Olá, ${capitalizedString(`${username}`)}`}
      />
    </Container>
  );
};

export default AppHeader;
