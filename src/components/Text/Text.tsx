import React from 'react';

type TextColor =
    | 'primary-main' | 'primary-light' | 'primary-dark' | 'primary-muted' | 'primary-contrast'
    | 'primary-success' | 'primary-danger' | 'primary-warning' | 'primary-info'
    | 'secondary-main' | 'secondary-light' | 'secondary-dark' | 'secondary-muted' | 'secondary-contrast'
    | 'secondary-success' | 'secondary-danger' | 'secondary-warning' | 'secondary-info';

type TextProps = {
        content: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        color?: TextColor;
        weight?: '100' | '300' | '500' | '700' | '900';
        style?: React.CSSProperties;
}

const Text = (props: TextProps) => {
    const { content, size = 'md', color = 'primary-text', weight = '500', style } = props;
    // Support color prop as 'primary-main', 'secondary-success', etc.
    const colorClass = color ? `color-${color}` : '';
    const classNames = [
        'font-size-' + size,
        colorClass,
        'font-weight-' + weight
    ].join(' ');
    return (
        <div className={classNames} style={style}>
            {content}
        </div>
    );
}

export default Text;