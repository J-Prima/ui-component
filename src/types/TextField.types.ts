import type { DisplayClass, SpacingClass } from './style.types.js';
import type { TypograpgyProps } from './Typography.types.js';

export interface TextFieldProps extends TypograpgyProps {
    label: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    inputStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    display?: DisplayClass;
    padding?: SpacingClass;
}
