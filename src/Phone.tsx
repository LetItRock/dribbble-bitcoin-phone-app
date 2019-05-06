import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Topbar } from './Topbar'
import { CryptoCurrencies } from './CryptoCurrencies'
import { Amount } from './Amount'
import { Chart } from './Chart'
import { BottomBar } from './BottomBar'

const animate = keyframes`
  40% {
    transform-origin: top;
    transform: translateY(3rem) rotateX(5deg) scale(1.2);
  }
  90% {
    transform-origin: top;
    transform: translateY(0) rotateX(10deg) scale(1.8);
  }
  100% {
    transform-origin: top;
    transform: translateY(0) rotateX(0deg) scale(1.8);
  }
`
// &:hover {
//  animation: ${animate} 2s linear forwards;
// }
const PhoneContainer = styled.div`
  position: absolute;
  top: -10%;
  left: 50%;
  width: 20rem;
  height: 42rem;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  margin-left: -10rem;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(53, 58, 110, 0.2);
  transition: all 0.5s ease;
  transform-origin: center;
  transform: scale(1) translateY(0) rotateX(0deg);
  will-change: transform;
  transform-style: preserve-3d;
`

export const Phone: React.SFC<any> = () => {
  return (
    <PhoneContainer>
      <Topbar />
      <CryptoCurrencies />
      <Amount />
      <Chart />
      <BottomBar />
    </PhoneContainer>
  )
}
