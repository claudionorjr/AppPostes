import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import normalizePixel from '../../../helpers/normalizePixel';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${normalizePixel(30)}px;
`;

export const PostContainer = styled.View`
  min-height: 100px;
  background-color: #31323b;
  border-radius: ${normalizePixel(10)}px;
  padding: 10px 10px;
  margin: 10px 0;
  flex-direction: column;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const ContentPostContainer = styled.View`
  background-color: #909090;
  border-radius: ${normalizePixel(10)}px;
  padding: 10px 10px;
  margin: 10px 0;
`;

export const BottomContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  width: ${normalizePixel(90)}px;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity``;
