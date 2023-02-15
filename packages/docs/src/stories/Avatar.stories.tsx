import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jerp-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jerp86.png',
    alt: 'Photo of white male, short, black hair, wearing black t-shirt, focused on face',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
