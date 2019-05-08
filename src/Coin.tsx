import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotateCoin = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(2160deg);
  }
`
//animation: ${rotateCoin} 10s linear infinite;
const CoinContainer = styled.div`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  position: relative;
  backface-visibility: hidden;
  perspective: 1000;
  transform-style: preserve-3d;
  transform-origin: center center;
  transform: rotateY(0) scale(1);
  will-change: transform, animation;

  &:hover {
    animation: ${rotateCoin} 5s ease-out infinite;
  }

  ${({ bigger }: { bigger: boolean }) =>
    bigger &&
    css`
      --size: 3rem;
      width: var(--size);
      height: var(--size);
      background-size: calc(var(--size) - 0.75rem);
    `}

  ${({ rotateY }: { rotateY: string }) =>
    rotateY &&
    css`
      transform: rotateY(${rotateY});
    `}
`
const BaseSide = styled.div`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(186, 213, 244);
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: calc(var(--size) - 0.75rem);

  ${({ icon }: any) =>
    icon &&
    css`
      background-image: url(${icon}.svg);
    `}
  ${({ yellow }: any) =>
    yellow &&
    css`
      background-color: rgb(245, 181, 76);
    `}

  ${({ bigger }: { bigger: boolean }) =>
    bigger &&
    css`
      --size: 3rem;
      width: var(--size);
      height: var(--size);
      background-size: calc(var(--size) - 1rem);
    `}
`
const Front = styled(BaseSide)`
  transform: rotateY(0) translateZ(2px);
`
const Back = styled(BaseSide)`
  transform: rotateY(-180deg) translateZ(2px);
`
const PartContainer = styled.div`
  --container-size: 2rem;
  --half-size: calc(var(--container-size) / 2);
  --hacky-subtract: 0.5px;
  --translateX: calc(var(--half-size) - 0.1rem - var(--hacky-subtract));
  transform: rotateX(90deg) translateX(var(--translateX)) translateY(-2px)
    translateZ(calc(-1 * var(--half-size)));
  position: relative;
  transform-style: preserve-3d;

  ${({ bigger }: { bigger: boolean }) =>
    bigger &&
    css`
      --container-size: 3rem;
      --hacky-subtract: 1px;
    `}
`
const Part = styled.div`
  --width: 4px;
  --height: 4px;
  --coin-size: 2rem;
  --half-size: calc(var(--coin-size) / 2);
  width: var(--width);
  height: var(--height);
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  background-color: rgb(160, 183, 210);
  transform-origin: center;
  will-change: transform;

  ${({ i }) => css`
    transform: rotateY(calc(${i} * 12deg)) translateZ(var(--half-size));
  `}

  ${({ yellow }: any) =>
    yellow &&
    css`
      background-color: #e3953c;
    `}
  ${({ bigger }: { bigger: boolean }) =>
    bigger &&
    css`
      --coin-size: 3rem;
      --width: 5px;
      background-color: rgb(242, 164, 76);
    `}
`

export const Coin: React.SFC<any> = props => {
  return (
    <CoinContainer {...props}>
      <Front {...props} />
      <PartContainer {...props}>
        <Part i={1} {...props} />
        <Part i={2} {...props} />
        <Part i={3} {...props} />
        <Part i={4} {...props} />
        <Part i={5} {...props} />
        <Part i={6} {...props} />
        <Part i={7} {...props} />
        <Part i={8} {...props} />
        <Part i={9} {...props} />
        <Part i={10} {...props} />
        <Part i={11} {...props} />
        <Part i={12} {...props} />
        <Part i={13} {...props} />
        <Part i={14} {...props} />
        <Part i={15} {...props} />
        <Part i={16} {...props} />
        <Part i={17} {...props} />
        <Part i={18} {...props} />
        <Part i={19} {...props} />
        <Part i={20} {...props} />
        <Part i={21} {...props} />
        <Part i={22} {...props} />
        <Part i={23} {...props} />
        <Part i={24} {...props} />
        <Part i={25} {...props} />
        <Part i={26} {...props} />
        <Part i={27} {...props} />
        <Part i={28} {...props} />
        <Part i={29} {...props} />
        <Part i={30} {...props} />
      </PartContainer>
      <Back {...props} />
    </CoinContainer>
  )
}
