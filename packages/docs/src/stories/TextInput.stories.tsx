import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Text,
  TextInput,
  TextInputProps,
} from '@jerp-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Input is disabled!  ❌',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const WithPrefixAndSize: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
    size: 'sm',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="form"
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '$2',
            marginTop: '$4',
            padding: '$4',
          }}
        >
          {Story()}
          <Button size="sm" type="submit">
            Reservar
            <ArrowRight />
          </Button>
        </Box>
      )
    },
  ],
}
