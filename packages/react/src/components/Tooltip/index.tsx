import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: string | ReactNode
}

export const Tooltip = ({ children, content, ...rest }: TooltipProps) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root {...rest}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipContent>
          <TooltipArrow />

          {content}
        </TooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
)

Tooltip.displayName = 'Tooltip'
