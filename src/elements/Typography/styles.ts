import styled from 'styled-components/native';

interface Props {
  textSize: number;
  textColor: 'Normal' | 'Light';
  textFontFamily: 'Bold' | 'Medium' | 'Regular' | 'Light';
}

export const Title = styled.Text<Props>`
  font-size: ${({textSize}) => textSize}px;
  color: ${({textColor}) => (textColor === 'Light' ? '#828587' : '#07080E')};
  font-family: 'RobotoSlab-${({textFontFamily}) => textFontFamily}';
`;
