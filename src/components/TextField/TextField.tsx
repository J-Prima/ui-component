import React from "react";

type TextFieldColor =
    | 'primary-main' | 'primary-light' | 'primary-dark' | 'primary-muted' | 'primary-contrast'
    | 'primary-success' | 'primary-danger' | 'primary-warning' | 'primary-info'
    | 'secondary-main' | 'secondary-light' | 'secondary-dark' | 'secondary-muted' | 'secondary-contrast'
    | 'secondary-success' | 'secondary-danger' | 'secondary-warning' | 'secondary-info';

type TextFieldProps = {
        label: string;
        placeholder?: string;
        value?: string;
        onChange?: (value: string) => void;
        disabled?: boolean;
        style?: React.CSSProperties;
        inputStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        color?: TextFieldColor;
        weight?: '100' | '300' | '500' | '700' | '900';
        display?: 'block' | 'inline-block' | 'inline';
        padding?: 'pt-1' | 'pb-1' | 'pl-1' | 'pr-1' | 'p-0';
}

const TextField = (props: TextFieldProps) => {
    const {
        label,
        placeholder = '',
        value = '',
        onChange,
        disabled = false,
        style,
        inputStyle,
        labelStyle,
        size = 'md',
        color = 'primary-text',
        weight = '500',
        display = 'block',
        padding = '0',
    } = props;

    const fieldClassNames = [
        'text-field',
        `d-${display}`,
    ].join(' ');

    // Support color prop as 'primary-main', 'secondary-success', etc.
    const colorClass = color ? `color-${color}` : '';
    const labelClassNames = [
        'font-size-' + size,
        colorClass.replace('primary', 'secondary'),
        'font-weight-' + weight,
        'text-field-label',
        padding
    ].join(' ');

    const inputClassNames = [
        'font-size-' + size,
        colorClass,
        'font-weight-' + weight,
        'text-field-input'
    ].join(' ');

    return (
        <div className={fieldClassNames} style={style}>
            {label && <label className={labelClassNames} style={labelStyle}>{label}</label>}
            <input
                type="text"
                className={inputClassNames}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                disabled={disabled}
                style={inputStyle}
            />
        </div>
    );
}

export default TextField;
