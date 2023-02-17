import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@jerp-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$gray500',
          paddingTop: '$20',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
