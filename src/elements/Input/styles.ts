import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background-color: #d6d6d6;
  border-width: 2px;
  border-color: #c4c4c4;
  border-radius: 10px;
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
      border-color: #004cff;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #232129;
  font-size: 18px;
  font-family: 'RobotoSlab-Light';
  margin-left: 10px;
`;
