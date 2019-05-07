import * as React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useGesture } from 'react-use-gesture'
import { Topbar } from './Topbar'
import { CryptoCurrencies } from './CryptoCurrencies'
import { Amount } from './Amount'
import { Chart } from './Chart'
import { BottomBar } from './BottomBar'

const scaleUp = keyframes`
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
const scaleDown = keyframes`
  0% {
    transform-origin: top;
    transform: translateY(0) rotateX(0deg) scale(1.8);
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
  will-change: transform, animation;
  transform-style: preserve-3d;
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

export const Phone: React.SFC<any> = () => {
  const [animation, setAnimation] = React.useState(scaleDown)
  const [canAnimate, setCanAnimate] = React.useState(true)
  const [dragging, setIsDragging] = React.useState(false)
  const toggleAnimation = () => {
    if (canAnimate && animation === scaleDown) {
      setCanAnimate(false)
      setAnimation(scaleUp)
      setTimeout(() => {
        setCanAnimate(true)
      }, 2500)
    } else if (canAnimate && animation === scaleUp) {
      setCanAnimate(false)
      setAnimation(scaleDown)
      setTimeout(() => {
        setCanAnimate(true)
      }, 2500)
    } else {
      setCanAnimate(false)
    }
  }
  const [{ startY, distance }, setDistance] = React.useState({
    startY: 0,
    distance: 0,
  })
  const bind = useGesture({
    onDrag: ({ delta: [_, deltaY], distance, dragging, first, last }) => {
      let startYToSet = startY
      let distanceToSet = distance
      if (first || last) {
        startYToSet = 0
      }
      if (deltaY < 0) {
        distanceToSet = 0
      } else if (deltaY > 100) {
        distanceToSet = 100
      }

      setIsDragging(dragging)
      setDistance({ startY: startYToSet, distance: distanceToSet })
    },
    // library handles this type of event
    onHover: toggleAnimation,
  } as any)
  // hacky way of having nice animation
  // because hover is laggy as same as mouseEnter and mouseLeave
  return (
    <PhoneContainer {...bind()} animation={animation}>
      <Topbar />
      {dragging && <RefreshCircle translateY={startY + distance} />}
      <CryptoCurrencies />
      <Amount />
      <Chart />
      <BottomBar />
    </PhoneContainer>
  )
}
