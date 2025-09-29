import React from "react";
import { TypograpgyProps } from "../../types/Typography.types";

const Typography = (props: TypograpgyProps) => {
    const { value, size = 'md', color = 'primary-text', weight = '500', style } = props;
    // Support color prop as 'primary-main', 'secondary-success', etc.
    const colorClass = color ? `color-${color}` : '';
    const classNames = [
        'font-size-' + size,
        colorClass,
        'font-weight-' + weight
    ].join(' ');
    return (
        <div className={classNames} style={style}>
            {value}
        </div>
    );
}

export default Typography;