import * as React from 'react'
import styled from 'styled-components'
import { DotsGrid } from './DotsGrid'
import { PhoneScene } from './PhoneScene'

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(229, 231, 244);
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5rem;
`
const Text = styled.span`
  color: rgb(220, 222, 235);
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 10rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  align-self: flex-end;
  justify-content: flex-end;
  flex-shrink: 1;
`

export const Scene: React.SFC<any> = () => {
  return (
    <SceneContainer>
      <DotsGrid />
      <PhoneScene />
      <Text>XD</Text>
    </SceneContainer>
  )
}
