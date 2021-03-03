import React from 'react';
import {Title} from './styles';

interface Props {
  size: number;
  color: 'Normal' | 'Light';
  fontFamily: 'Bold' | 'Medium' | 'Regular' | 'Light';
  text: string;
}

const Typography: React.FC<Props> = ({size, color, fontFamily, text}) => (
  <Title textSize={size} textColor={color} textFontFamily={fontFamily}>
    {text}
  </Title>
);

export default Typography;
