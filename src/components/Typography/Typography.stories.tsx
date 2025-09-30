import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const LazyTypography = React.lazy(() => import('./Typography.tsx'));

import { FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, COLOR_CLASS_OPTIONS } from '../../types/style.types.ts';

const meta: Meta<typeof LazyTypography> = {
    title: 'Atoms/Typography',
    component: LazyTypography,
    tags: ['autodocs'],
    decorators: [(Story) => (
        <React.Suspense fallback="Loading...">
            <Story />
        </React.Suspense>
    )],
    args: {
        value: 'Hello, Storybook!',
        size: 'md',
        color: 'primary-main',
        weight: '500',
    },
    argTypes: {
        size: {
            control: 'select',
            options: FONT_SIZE_OPTIONS,
        },
        color: {
            control: 'select',
            options: COLOR_CLASS_OPTIONS,
        },
        weight: {
            control: 'select',
            options: FONT_WEIGHT_OPTIONS,
        },
    },
}

export default meta;
type Story = StoryObj<typeof LazyTypography>;

export const Default: Story = {
    args: {
        value: 'Hello, Storybook!',
        size: 'md',
        color: 'primary-main',
        weight: '500',
    }
};

export const LargeSecondary: Story = {
    args: {
        value: 'This is a large secondary text.',
        size: 'lg',
        color: 'secondary-main',
        weight: '500',
    }
};

export const SmallMuted: Story = {
    args: {
        value: 'This is a small muted text.',
        size: 'xs',
        color: 'secondary-muted',
        weight: '500',
    }
};

export const Heading: Story = {
    args: {
        value: 'Heading Text',
        size: 'xl',
        color: 'secondary-dark',
        weight: '700',
    }
};

export const Paragraph: Story = {
    args: {
        value: 'This is a paragraph of text used for body value.',
        size: 'md',
        color: 'primary-main',
        weight: '500',
    }
};

export const Caption: Story = {
    args: {
        value: 'Caption or helper text.',
        size: 'xs',
        color: 'secondary-text',
        weight: '300',
    }
};

export const ErrorText: Story = {
    args: {
        value: 'Error: Something went wrong.',
        size: 'sm',
        color: 'primary-danger',
        weight: '700',
    }
};

export const SuccessText: Story = {
    args: {
        value: 'Success! Your action was completed.',
        size: 'sm',
        color: 'primary-success',
        weight: '700',
    }
};

export const CustomText: Story = {
    args: {
        value: 'Custom sized and colored text.',
        weight: "700",
        style: { fontSize: '20px', color: 'green'}
    }
};