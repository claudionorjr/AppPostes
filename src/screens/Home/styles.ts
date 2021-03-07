import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { shade } from 'polished';
import normalizePixel from '../../helpers/normalizePixel';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const NewPosteContainer = styled.View`
  width: 100%;
  border-top-left-radius: ${normalizePixel(20)}px;
  border-top-right-radius: ${normalizePixel(20)}px;
  background-color: ${shade(-0.2, '#31323b')};
  padding: 0 ${normalizePixel(30)}px ${15 + getBottomSpace()}px
    ${normalizePixel(30)}px;
  bottom: 0;
`;
