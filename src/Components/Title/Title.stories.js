/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Title from './Title'

export default {
  title: 'Typography/H1',
  component: Title
}

const Template = args => <Title {...args} />

export const PrimaryH1 = Template.bind({})
PrimaryH1.args = {
  variant: 'primaryH1',
  children: 'Title Primary h1'
}

export const SecondaryH1 = Template.bind({})
SecondaryH1.args = {
  variant: 'secondaryH1',
  children: 'Title Secondary h1'
}

export const WarningH1 = Template.bind({})
WarningH1.args = {
  variant: 'warningH1',
  children: 'Title Danger h1'
}

export const ErrorH1 = Template.bind({})
ErrorH1.args = {
  variant: 'errorH1',
  children: 'Title Error h1'
}

export const SuccessH1 = Template.bind({})
SuccessH1.args = {
  variant: 'successH1',
  children: 'Title Success h1'
}