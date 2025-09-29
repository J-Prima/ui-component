import{B as o}from"./Button-B4TbOzLl.js";import"./iframe-DP56Cr_V.js";import"./preload-helper-PPVm8Dsz.js";const t=["contained","text","outlined"],s=["xs","sm","md","lg","xl","xxl"],i=["100","300","500","700","900"],c=["primary-main","primary-light","primary-dark","primary-muted","primary-contrast","primary-success","primary-danger","primary-warning","primary-info","primary-text","secondary-main","secondary-light","secondary-dark","secondary-muted","secondary-contrast","secondary-success","secondary-danger","secondary-warning","secondary-info","secondary-text"],{fn:m}=__STORYBOOK_MODULE_TEST__,y={title:"Atoms/Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:t},color:{control:"select",options:c},size:{control:"select",options:s},weight:{control:"select",options:i}},args:{onClick:m()}},r={args:{label:"Primary Button",variant:"contained",color:"primary-main",size:"md",weight:"700"}},a={args:{label:"Secondary Button",variant:"contained",color:"secondary-main",size:"md",weight:"500"}},n={args:{label:"Large Button",variant:"contained",color:"primary-main",size:"xl",weight:"700"}},e={args:{label:"Small Button",variant:"contained",color:"primary-main",size:"xs",weight:"500"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'md',
    weight: '700'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'contained',
    color: 'secondary-main',
    size: 'md',
    weight: '500'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'xl',
    weight: '700'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'xs',
    weight: '500'
  }
}`,...e.parameters?.docs?.source}}};const g=["Primary","Secondary","Large","Small"];export{n as Large,r as Primary,a as Secondary,e as Small,g as __namedExportsOrder,y as default};
