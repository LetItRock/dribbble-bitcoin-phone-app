import * as React from 'react'
import styled from 'styled-components'

const DotsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  align-self: flex-start;
  justify-self: flex-start;
`
const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: rgb(220, 222, 235);
`

export const DotsGrid: React.SFC<any> = () => {
  return (
    <DotsGridContainer>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </DotsGridContainer>
  )
}
