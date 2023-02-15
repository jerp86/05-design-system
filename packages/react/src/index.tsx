import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },

      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
