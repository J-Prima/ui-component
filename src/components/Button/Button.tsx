import React from "react";
import type { ButtonProps } from "../../types/Button.types.js";

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    size = "md",
    variant = "contained",
    color = "primary-main",
    weight = "500",
    style,
    className = "",
    disabled = false,
    ...props
}) => {
    const variantClass = variant ? `button--${variant}` : "";
    const colorClass = color ? `color-${color}` : "";
    const classNames = [
        "button",
        variantClass,
        colorClass,
        `font-size-${size}`,
        `font-weight-${weight}`,
        className
    ].join(" ").trim();
    return (
        <button
            type="button"
            className={classNames}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
