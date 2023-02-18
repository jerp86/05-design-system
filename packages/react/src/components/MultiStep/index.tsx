import { ComponentProps, useCallback } from 'react'
import crypto from 'crypto'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  const handleUUID = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window?.crypto?.randomUUID === 'function'
    ) {
      return window.crypto.randomUUID()
    }

    return crypto.randomUUID()
  }, [])

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={handleUUID()} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
