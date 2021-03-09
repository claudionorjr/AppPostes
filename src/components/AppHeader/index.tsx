import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Typography } from '../../elements';
import capitalizedString from '../../helpers/capitalizedString';
import normalizePixel from '../../helpers/normalizePixel';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerLogOut } from './styled';

interface Props {
  username: string;
  testID?: string;
}

const AppHeader: React.FC<Props> = ({ username, testID }) => {
  const { signOut } = useAuth();
  return (
    <Container testID={testID}>
      <ContainerLogOut onPress={signOut}>
        <Icon name="arrow-left" size={normalizePixel(16)} color="#828587" />
        <Typography color="Light" fontFamily="Light" size={16} text="Sair" />
      </ContainerLogOut>
      <Typography
        color="White"
        fontFamily="Regular"
        size={18}
        text={capitalizedString(username)}
      />
    </Container>
  );
};

export default AppHeader;
