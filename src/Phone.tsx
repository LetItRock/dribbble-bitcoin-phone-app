import * as React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useGesture } from 'react-use-gesture'
import { useSpring } from 'react-spring'
import { Topbar } from './Topbar'
import { CryptoCurrencies } from './CryptoCurrencies'
import { Amount } from './Amount'
import { Chart } from './Chart'
import { BottomBar } from './BottomBar'
import { useDragDown } from './useDragDown'

const scaleUp = keyframes`
  40% {
    transform-origin: top;
    transform: translateY(1rem) rotateX(-5deg) scale(1.2);
  }
  90% {
    transform-origin: top;
    transform: translateY(4rem) rotateX(-15deg) scale(1.8);
  }
  100% {
    transform-origin: top;
    transform: translateY(0) rotateX(0deg) scale(1.8);
  }
`
const scaleDown = keyframes`
  0% {
    transform-origin: top;
    transform: translateY(0) rotateX(0deg) scale(1.8);
  }
  40% {
    transform-origin: top;
    transform: translateY(0) rotateX(15deg) scale(1.4);
  }
  100% {
    transform-origin: top;
    transform: translateY(0) rotateX(0deg) scale(1);
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
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  padding: 20px 0 0 0;
  margin-left: -10rem;
  overflow-y: hidden;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(53, 58, 110, 0.2);
  transition: all 0.5s ease;
  transform-origin: center;
  transform: scale(1) translateY(0) translateZ(100px) rotateX(0deg);
  will-change: transform, animation;
  animation: ${({ animation }: { animation: any }) => animation} 2s linear
    forwards;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const RefreshCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -2rem;
  width: 4rem;
  height: 4rem;
  z-index: 1;
  background-color: white;
  border-radius: 100%;
  box-shadow: 0 0 10px lightgrey;
  will-change: transform;
  animation: ${fadeIn} 1s ease;

  ${({ translateY }: { translateY: number }) => css`
    transform: translateY(${translateY}px);
  `}
`

export const Phone: React.SFC<any> = ({ scale }) => {
  const ref = React.useRef(null)
  const { translateY, dragging, first, last } = useDragDown({
    ref,
    config: {
      maxDistance: 100,
    },
  })
  return (
    <PhoneContainer ref={ref} animation={!scale ? scaleDown : scaleUp}>
      <Topbar />
      {dragging && <RefreshCircle translateY={translateY} />}
      <CryptoCurrencies rotateCoins={last} translateY={translateY} />
      <Amount refreshAmount={last} translateY={translateY} />
      <Chart translateY={translateY} />
      <BottomBar />
    </PhoneContainer>
  )
}
