import styled, { css } from 'styled-components/native';
import normalizePixel from '../../helpers/normalizePixel';

interface Props {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 50px;
  padding: 0 ${normalizePixel(16)}px;
  background-color: #31323b;
  border-width: 2px;
  border-color: #31323b;
  border-radius: 25px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #d9408a;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Light';
  margin-left: ${normalizePixel(10)}px;
`;
