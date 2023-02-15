import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => (
  <MultiStepContainer>
    <Label>
      Passo {currentStep} de {size}
    </Label>

    <Steps css={{ '--steps-size': size }}>
      {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
        <Step key={crypto.randomUUID()} active={currentStep >= step} />
      ))}
    </Steps>
  </MultiStepContainer>
)
