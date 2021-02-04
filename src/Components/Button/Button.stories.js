import React from 'react';
import Button from './Button'

export default {
  title: 'Form/Button',
  component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  log: () => console.log(Primary.args.variant),
  children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  log: () => console.log(Secondary.args.variant),
  children: 'Secondary Button'
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  log: () => console.log(Danger.args.variant),
  children: 'Danger Button'
}

export const Errors = Template.bind({})
Errors.args = {
  variant: 'error',
  log: () => console.log(Errors.args.variant),
  children: 'Error Button'
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  log: () => console.log(Success.args.variant),
  children: 'Success Button'
}