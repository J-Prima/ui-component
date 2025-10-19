import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, COLOR_CLASS_OPTIONS, DISPLAY_CLASS_OPTIONS, SPACING_CLASS_OPTIONS } from '../../types/style.types.ts';

const LazyTextField = React.lazy(() => import('./TextField.tsx'));

const meta: Meta<typeof LazyTextField> = {
    title: 'Atoms/TextField',
    component: LazyTextField,
    tags: ['autodocs'],
    decorators: [(Story) => (
        <React.Suspense fallback="Loading...">
            <Story />
        </React.Suspense>
    )],
    args: {
        label: 'Default TextField',
        placeholder: 'Enter text here',
        size: 'md',
        color: 'primary-main',
        weight: '500',
        display: 'block',
        padding: 'p-0',
        style: { display: 'block', padding: '8px' },
        inputStyle: { padding: '8px' },
        labelStyle: { display: 'block', paddingBottom: '4px' },
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
        display: {
            control: 'select',
            options: DISPLAY_CLASS_OPTIONS,
        },
        padding: {
            control: 'select',
            options: SPACING_CLASS_OPTIONS,
        },
    },
}

export default meta;
type Story = StoryObj<typeof LazyTextField>;

export const Default: Story = {
    args: {
        label: 'Default TextField',
        placeholder: 'Enter text here',
        size: 'md',
        color: 'primary-main',
        weight: '500',
        display: 'block',
        padding: 'p-0',
        style: { display: 'block', padding: '8px' },
        inputStyle: { padding: '8px' },
        labelStyle: { display: 'block', paddingBottom: '4px' },
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled TextField',
        placeholder: 'Cannot enter text',
        disabled: true,
        size: 'md',
        color: 'secondary-muted',
        weight: '500',
        display: 'block',
        padding: 'p-0',
        style: { display: 'block', padding: '8px' },
        inputStyle: { padding: '8px' },
        labelStyle: { display: 'block', paddingBottom: '4px' },
    }
};

export const LargeSecondary: Story = {
    args: {
        label: 'Large Secondary TextField',
        placeholder: 'Enter text here',
        size: 'lg',
        color: 'secondary-main',
        weight: '500',
        display: 'block',
        padding: 'pt-1',
        style: { display: 'block', padding: '12px' },
        inputStyle: { padding: '12px' },
        labelStyle: { display: 'block', paddingBottom: '6px' },
    }
};

export const SmallMuted: Story = {
    args: {
        label: 'Small Muted TextField',
        placeholder: 'Enter text here',
        size: 'xs',
        color: 'secondary-muted',
        weight: '500',
        display: 'inline-block',
        padding: 'pb-1',
        style: { display: 'inline-block', padding: '4px' },
        inputStyle: { padding: '4px' },
        labelStyle: { display: 'block', paddingBottom: '2px' },
    }
};

export const WithValue: Story = {
    args: {
        label: 'TextField with Value',
        value: 'Pre-filled text',
        size: 'md',
        color: 'primary-main',
        weight: '500',
        display: 'block',
        padding: 'p-0',
        style: { display: 'block', padding: '8px' },
        inputStyle: { padding: '8px' },
        labelStyle: { display: 'block', paddingBottom: '4px' },
    }
};

export const CustomStyles: Story = {
    args: {
        label: 'Custom Styled TextField',
        placeholder: 'Enter text here',
        size: 'md',
        color: 'primary-main',
        weight: '500',
        display: 'block',
        padding: 'p-0',
        style: { margin: '20px', padding: '10px', border: '1px solid #ccc', display: 'block' },
        inputStyle: { borderRadius: '8px', padding: '12px' },
        labelStyle: { fontStyle: 'italic', marginBottom: '5px', display: 'block', paddingBottom: '4px' },
    }
};
