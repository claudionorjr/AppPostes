import styled from 'styled-components/native';
import normalizePixel from '../../helpers/normalizePixel';

interface Props {
  textSize: number;
  textColor: 'Normal' | 'Light' | 'White';
  textFontFamily: 'Bold' | 'Medium' | 'Regular' | 'Light';
}

export const Title = styled.Text<Props>`
  font-size: ${({ textSize }) => normalizePixel(textSize)}px;
  color: ${({ textColor }) =>
    textColor === 'Light'
      ? '#828587'
      : textColor === 'Normal'
      ? '#07080E'
      : '#fff'};
  font-family: 'RobotoSlab-${({ textFontFamily }) => textFontFamily}';
`;
