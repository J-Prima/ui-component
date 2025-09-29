import { DisplayClass, SpacingClass } from './style.types';
import { TypograpgyProps } from './Typography.types';

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
