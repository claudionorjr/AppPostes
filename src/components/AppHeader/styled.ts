import styled from 'styled-components/native';
import normalizePixel from '../../helpers/normalizePixel';

export const Container = styled.View`
  background-color: #31323b;
  align-items: center;
  justify-content: space-between;
  padding: 15px ${normalizePixel(30)}px;
  flex-direction: row;
  border-bottom-left-radius: ${normalizePixel(10)}px;
  border-bottom-right-radius: ${normalizePixel(10)}px;
`;

export const ContainerLogOut = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
