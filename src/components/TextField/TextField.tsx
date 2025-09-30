import React from "react";
import type { TextFieldProps } from "../../types/TextField.types.js";

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
