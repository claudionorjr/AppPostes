import { shade } from 'polished';
import styled from 'styled-components/native';
import normalizePixel from '../../../helpers/normalizePixel';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${normalizePixel(30)}px;
  background-color: #31323b;
`;

export const CloseBtn = styled.TouchableOpacity`
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.TextInput`
  flex: 1;
  background-color: ${shade(-0.2, '#31323b')};
  padding: 10px;
  border-radius: ${normalizePixel(10)}px;
  color: #fff;
  font-size: 22px;
`;
