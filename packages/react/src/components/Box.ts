import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$4',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
