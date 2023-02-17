import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  borderRadius: '$xs',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  animationDuration: '400ms',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    animationName: slideUpAndFade,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
