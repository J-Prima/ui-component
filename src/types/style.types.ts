export const SPACING_CLASS_OPTIONS = [
  'm-0', 'mt-1', 'mb-1', 'ml-1', 'mr-1',
  'p-0', 'pt-1', 'pb-1', 'pl-1', 'pr-1',
  'p-1', 'p-2', 'p-3', 'p-4', 'p-5',
  'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5',
  'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5',
  'pl-1', 'pl-2', 'pl-3', 'pl-4', 'pl-5',
  'pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5',
] as const;
export const DISPLAY_CLASS_OPTIONS = ['block', 'inline-block', 'inline', 'flex', 'none'] as const;
export const FONT_SIZE_OPTIONS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export const FONT_WEIGHT_OPTIONS = ['100', '300', '500', '700', '900'] as const;
export const COLOR_CLASS_OPTIONS = [
  'primary-main', 'primary-light', 'primary-dark', 'primary-muted', 'primary-contrast',
  'primary-success', 'primary-danger', 'primary-warning', 'primary-info', 'primary-text',
  'secondary-main', 'secondary-light', 'secondary-dark', 'secondary-muted', 'secondary-contrast',
  'secondary-success', 'secondary-danger', 'secondary-warning', 'secondary-info', 'secondary-text',
] as const;
export type FontWeight = '100' | '300' | '500' | '700' | '900';
export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type ColorClass =
  | 'primary-main' | 'primary-light' | 'primary-dark' | 'primary-muted' | 'primary-contrast'
  | 'primary-success' | 'primary-danger' | 'primary-warning' | 'primary-info' | 'primary-text'
  | 'secondary-main' | 'secondary-light' | 'secondary-dark' | 'secondary-muted' | 'secondary-contrast'
  | 'secondary-success' | 'secondary-danger' | 'secondary-warning' | 'secondary-info' | 'secondary-text';
export type SpacingClass =
  | 'm-0' | 'mt-1' | 'mb-1' | 'ml-1' | 'mr-1'
  | 'p-0' | 'pt-1' | 'pb-1' | 'pl-1' | 'pr-1'
  | `p-${1|2|3|4|5}` | `pt-${1|2|3|4|5}` | `pb-${1|2|3|4|5}` | `pl-${1|2|3|4|5}` | `pr-${1|2|3|4|5}`;
export type DisplayClass = 'block' | 'inline-block' | 'inline' | 'flex' | 'none';
export type TextAlignClass = 'left' | 'center' | 'right';
export type BorderRadiusClass = 'rounded' | 'rounded-pill';
export type WidthClass = '100' | 'auto';

export interface StyleClassTypes {
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  color?: ColorClass;
  spacing?: SpacingClass;
  display?: DisplayClass;
  textAlign?: TextAlignClass;
  borderRadius?: BorderRadiusClass;
  width?: WidthClass;
}
