import React from 'react';

type TextProps = {
    content: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted' | 'white';
    weight?: '100' | '300' | '500' | '700' | '900';
    style?: React.CSSProperties;
}

const Text = (props: TextProps) => {
    const { content, size = 'md', color = 'primary', weight = '500', style } = props;
    const classNames = [
        'font-size-' + size,
        'color-' + color,
        'font-weight-' + weight
    ].join(' ');
    return (
        <div className={classNames} style={style}>
            {content}
        </div>
    );
}

export default Text;