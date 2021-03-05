import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const NewPosteContainer = styled.View`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #d6d6d6;
  position: absolute;
  padding: 15px 30px ${15 + getBottomSpace()}px 30px;
  bottom: 0;
`;
