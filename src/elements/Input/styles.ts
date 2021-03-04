import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background-color: #232129;
  border-width: 2px;
  border-color: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Light';
  margin-left: 10px;
`;
