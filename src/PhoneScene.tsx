import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Phone } from './Phone'

const PhoneSceneContainer = styled.div`
  width: 70vmin;
  height: 70vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(53, 58, 110);
  border-radius: 100%;
`

export const PhoneScene: React.SFC<any> = () => {
  return (
    <PhoneSceneContainer>
      <Phone />
    </PhoneSceneContainer>
  )
}
