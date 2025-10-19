export const BUTTON_VARIANT_OPTIONS = ['contained', 'text', 'outlined'] as const;
import type { FontSize, FontWeight } from "./style.types.js";

export type ButtonVariant = typeof BUTTON_VARIANT_OPTIONS[number];

export const BUTTON_SIZE_OPTIONS = [
    'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
] as const;

export const BUTTON_WEIGHT_OPTIONS = [
    '100', '300', '500', '700', '900'
] as const;

export const BUTTON_COLOR_OPTIONS = [
    'primary-main', 'primary-light', 'primary-dark', 'primary-muted', 'primary-contrast',
    'primary-success', 'primary-danger', 'primary-warning', 'primary-info', 'primary-text',
    'secondary-main', 'secondary-light', 'secondary-dark', 'secondary-muted', 'secondary-contrast',
    'secondary-success', 'secondary-danger', 'secondary-warning', 'secondary-info', 'secondary-text',
] as const;

export type ButtonColor = typeof BUTTON_COLOR_OPTIONS[number];

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    size?: FontSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    weight?: FontWeight;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
}
