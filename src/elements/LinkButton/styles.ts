import styled, { css } from 'styled-components/native';

interface props {
  isWithIcon: boolean;
}

export const Container = styled.TouchableOpacity<props>`
  margin-top: 20px;
  ${({ isWithIcon }) =>
    isWithIcon &&
    css`
      flex-direction: row;
      width: 50%;
      align-items: center;
      justify-content: space-evenly;
    `}
`;
