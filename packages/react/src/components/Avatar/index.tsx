import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: AvatarProps) => (
  <AvatarContainer>
    <AvatarImage {...props} loading="lazy" decoding="async" />

    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
)

Avatar.displayName = 'Avatar'
