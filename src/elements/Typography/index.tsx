import React from 'react';
import { Title } from './styles';

interface Props {
  size: number;
  color: 'Normal' | 'Light' | 'White';
  fontFamily: 'Bold' | 'Medium' | 'Regular' | 'Light';
  text: string;
  testID?: string;
}

const Typography: React.FC<Props> = ({
  size,
  color,
  fontFamily,
  text,
  testID,
}) => (
  <Title
    testID={testID}
    textSize={size}
    textColor={color}
    textFontFamily={fontFamily}
  >
    {text}
  </Title>
);

export default Typography;
