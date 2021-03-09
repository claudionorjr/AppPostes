import styled from 'styled-components/native';
import normalizePixel from '../../helpers/normalizePixel';

export const Container = styled.View`
  padding: 0 ${normalizePixel(30)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ContainerIcon = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
