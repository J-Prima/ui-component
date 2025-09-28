import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const LazyText = React.lazy(() => import('./Text'));

const meta: Meta<typeof LazyText> = {
    title: 'Atoms/Text',
    component: LazyText,
    tags: ['autodocs'],
    decorators: [(Story) => (
        <React.Suspense fallback="Loading...">
            <Story />
        </React.Suspense>
    )],
}

export default meta;
type Story = StoryObj<typeof LazyText>;

export const Default: Story = {
    args: {
        content: 'Hello, Storybook!',
        size: 'md',
        color: 'primary-main',
        weight: '500',
    }
};

export const LargeSecondary: Story = {
    args: {
        content: 'This is a large secondary text.',
        size: 'lg',
        color: 'secondary-main',
        weight: '500',
    }
};

export const SmallMuted: Story = {
    args: {
        content: 'This is a small muted text.',
        size: 'xs',
        color: 'secondary-muted',
        weight: '500',
    }
};

export const Heading: Story = {
    args: {
        content: 'Heading Text',
        size: 'xl',
        color: 'secondary-dark',
        weight: '700',
    }
};

export const Paragraph: Story = {
    args: {
        content: 'This is a paragraph of text used for body content.',
        size: 'md',
        color: 'primary-main',
        weight: '500',
    }
};

export const Caption: Story = {
    args: {
        content: 'Caption or helper text.',
        size: 'xs',
        color: 'secondary-muted',
        weight: '300',
    }
};

export const ErrorText: Story = {
    args: {
        content: 'Error: Something went wrong.',
        size: 'sm',
        color: 'primary-danger',
        weight: '700',
    }
};

export const SuccessText: Story = {
    args: {
        content: 'Success! Your action was completed.',
        size: 'sm',
        color: 'primary-success',
        weight: '700',
    }
};

export const CustomText: Story = {
    args: {
        content: 'Custom sized and colored text.',
        weight: "700",
        style: { fontSize: '20px', color: 'green'}
    }
};