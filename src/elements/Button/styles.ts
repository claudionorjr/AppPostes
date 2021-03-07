import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import normalizePixel from '../../helpers/normalizePixel';

interface ContainerProps {
  isAddPost: boolean | undefined;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: ${({ isAddPost }) => (isAddPost ? -25 : 15)}px;
`;

const normalizedRadius = normalizePixel(70 / 2);

export const ContainerBtnAddPost = styled.View`
  height: ${normalizePixel(70)}px;
  width: ${normalizePixel(70)}px;
  border-radius: ${normalizedRadius}px;
  border-width: 3px;
  border-color: #fff;
`;

const style = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  linearGradientAddPost: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalizedRadius,
  },
});

export const { linearGradient, linearGradientAddPost } = style;
