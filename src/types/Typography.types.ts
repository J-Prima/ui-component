import { FontSize, FontWeight, ColorClass } from './style.types';

export interface TypograpgyProps {
  value: string;
  size?: FontSize;
  color?: ColorClass;
  weight?: FontWeight;
  style?: React.CSSProperties;
}
