import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = (props: CheckboxProps) => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
)
