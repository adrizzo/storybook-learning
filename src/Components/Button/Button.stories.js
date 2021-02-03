import React, { Component } from 'react';
import Button from './Button'

export default {
  title: 'Form/Button',
  component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Danger Button'
}

export const Error = Template.bind({})
Error.args = {
  variant: 'error',
  children: 'Error Button'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  children: 'Success Button'
}