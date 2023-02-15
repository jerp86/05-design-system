import { Text, TextProps } from '@jerp-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque, possimus explicabo incidunt architecto sunt, optio harum et laborum, at minus mollitia voluptates assumenda numquam? Dolore reiciendis doloremque at recusandae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
