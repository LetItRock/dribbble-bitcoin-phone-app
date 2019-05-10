import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Phone } from './Phone'

const PhoneSceneContainer = styled.div`
  width: 70vmin;
  height: 70vmin;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -50%, -100px);
  background-color: rgb(53, 58, 110);
  border-radius: 100%;
  perspective: 2000px;
`

export const PhoneScene: React.SFC<any> = ({ scale }) => {
  return (
    <PhoneSceneContainer>
      <Phone scale={scale} />
    </PhoneSceneContainer>
  )
}
