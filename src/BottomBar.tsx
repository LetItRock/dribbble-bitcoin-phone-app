import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { useGesture } from 'react-use-gesture'
import { useSpring, animated } from 'react-spring'
import { useDragDown } from './useDragDown'

const BottomBarContainer = styled(animated.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: -7rem;
  padding: 0.75rem;
  background-color: #121d5b;
  border-radius: 50px;
  z-index: 1;
`
const Top = styled.div`
  width: 3rem;
  height: 4px;
  background-color: #383c72;
  border-radius: 5px;
`
const Bottom = styled.div`
  width: 6rem;
  height: 4px;
  background-color: #383c72;
  border-radius: 5px;
`
const ItemsContainer = styled.div``
const Item = styled.div`
  width: 16rem;
  height: 5rem;
  background-color: #283069;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`
const ItemIcon = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #343b71;
  border-radius: 10px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    transform: translate(-50%, -50%);
    background-image: ${({ url }: { url: string }) => `url(${url})`};
    background-repeat: no-repeat;
    background-position: center;
  }
`
const ItemInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: baseline;
  justify-items: space-between;
  flex-grow: 1;
  margin-left: 20px;
`
const Name = styled.div`
  grid-column: 1 / 2;
  color: white;
  font-size: 0.875rem;
`
const Percent = styled.div`
  grid-column: 2 / 3;
  color: #62689c;
  font-size: 0.875rem;
  justify-self: end;
`
const Progress = styled.div`
  grid-column: 1 / span 2;
  margin-top: 10px;
  height: 10px;
  width: 100%;
  position: relative;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #343b71;
    border-radius: 5px;
  }
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: ${({ progress }: { progress: number }) => `${progress}%`};
    background-color: #59d4f8;
    border-radius: 5px;
  }
`

export const BottomBar: React.SFC<any> = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [{ y }, set] = useSpring(() => ({
    y: 0,
  }))
  const { translateY, canceled } = useDragDown({
    ref,
    config: {
      maxDistance: ref => ref.current.clientHeight / 2.5,
      maxDistanceHit: ({ cancel }) => {
        cancel()
        return true
      },
    },
  })
  const yToSet = canceled ? ref.current.clientHeight - 28 : translateY
  set({ y: yToSet })
  return (
    <BottomBarContainer
      ref={ref}
      style={{
        transform: y.interpolate(
          translateY => `translate3d(0,${translateY}px,0)`,
        ),
      }}
    >
      <Top />
      <ItemsContainer>
        <Item>
          <ItemIcon url="pie-chart.svg" />
          <ItemInfo>
            <Name>Value</Name>
            <Percent>+70%</Percent>
            <Progress progress={70} />
          </ItemInfo>
        </Item>
        <Item>
          <ItemIcon url="oval.svg" />
          <ItemInfo>
            <Name>Open</Name>
            <Percent>+40%</Percent>
            <Progress progress={40} />
          </ItemInfo>
        </Item>
      </ItemsContainer>
      <Bottom />
    </BottomBarContainer>
  )
}
