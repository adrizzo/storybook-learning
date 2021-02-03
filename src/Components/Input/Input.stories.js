import React from 'react'
import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input
}

// Simple example for very basic component storie

/* export const Small = () => <Input size='small' placeholder='Small input text' type='text' />
export const Medium = () => <Input size='medium' placeholder='Medium input text' type='text' />
export const Large = () => <Input size='large' placeholder='Large input text' type='text' /> */

// More complex template exports with args as props to the stories
const Template = args => <Input {...args} />

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  type: 'text',
  placeholder: 'Small Input'
}

export const Medium = Template.bind({})
Medium.args = {
  variant: 'medium',
  type: 'text',
  placeholder: 'Medium Input'
}

export const Large = Template.bind({})
Large.args = {
  variant: 'large',
  type: 'text',
  placeholder: 'Large Input'
}

// Extended props from another storie

export const SmallNumber = Template.bind({})
SmallNumber.args = {
  ...Small.args,
  type: 'number'
}