import styled from 'styled-components/native';
import normalizePixel from '../../helpers/normalizePixel';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 ${normalizePixel(30)}px;
`;
