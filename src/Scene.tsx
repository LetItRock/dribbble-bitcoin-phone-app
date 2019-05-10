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
const Button = styled.span`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: rgb(53, 58, 110);
  background-image: url(glass.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1.25em;
  cursor: pointer;
`

export const Scene: React.SFC<any> = () => {
  const [scale, setScale] = React.useState(false)
  return (
    <SceneContainer>
      <DotsGrid />
      <PhoneScene scale={scale} />
      <Text>XD</Text>
      <Button onClick={() => setScale(!scale)} />
    </SceneContainer>
  )
}
