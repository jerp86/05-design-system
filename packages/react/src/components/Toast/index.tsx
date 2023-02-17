import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
  description?: string | ReactNode
}

export const Toast = ({ title, description, ...rest }: ToastProps) => (
  <ToastPrimitive.Provider swipeDirection="right">
    <ToastRoot {...rest}>
      <ToastTitle>{title}</ToastTitle>

      {description && <ToastDescription>{description}</ToastDescription>}

      <ToastClose>
        <X weight="light" size={20} />
      </ToastClose>
    </ToastRoot>

    <ToastViewport />
  </ToastPrimitive.Provider>
)

Toast.displayName = 'Toast'
