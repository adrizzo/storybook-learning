
import React from 'react'
import { addDecorator } from '@storybook/react'
import CenterAlign from '../src/Components/Decorators/CenterAlign/CenterAlign.decorator'
import { withConsole } from '@storybook/addon-console'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator(story => <CenterAlign>{story()}</CenterAlign>)

addDecorator((unboundStoryFn, context) => withConsole()(unboundStoryFn)(context))