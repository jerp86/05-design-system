import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@jerp-ignite-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const timerRef = useRef(0)

  const handleClick = useCallback(() => {
    setIsOpen(false)
    window.clearTimeout(timerRef.current)

    timerRef.current = window.setTimeout(() => setIsOpen(true), 100)
  }, [])

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button onClick={handleClick}>Click here</Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Toast title',
    description: 'Description of Toast, not required',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
