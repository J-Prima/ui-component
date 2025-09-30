import type { FontSize, FontWeight, ColorClass } from './style.types.js';

export interface TypograpgyProps {
  value: string;
  size?: FontSize;
  color?: ColorClass;
  weight?: FontWeight;
  style?: React.CSSProperties;
}
