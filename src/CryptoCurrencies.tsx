import * as React from 'react'
import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { useBouncing } from './useBouncing'
import { Coin } from './Coin'

const CryptoCurrenciesContainer = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: flex-end;
  transform-style: preserve-3d;
  overflow: hidden;
  margin: 0 30px;
  margin-bottom: 3rem;
`
const CurrencyName = styled.span`
  color: rgb(208, 215, 225);
  ${({ highlight }: { highlight: boolean }) =>
    highlight &&
    css`
      color: rgb(53, 58, 110);
      font-weight: bold;
    `}
`

export const CryptoCurrencies: React.SFC<any> = React.memo(
  ({ translateY, rotateCoins }) => {
    const [selected, setSelected] = React.useState(1)
    const style = useBouncing({ translateY })
    return (
      <CryptoCurrenciesContainer style={style}>
        <Coin
          rotate={rotateCoins}
          icon="ethereum"
          bigger={selected === 0}
          rotateY={'12deg'}
        />
        <Coin
          rotate={rotateCoins}
          icon="bitcoin"
          bigger={selected === 1}
          yellow
          rotateY={'0deg'}
        />
        <Coin
          rotate={rotateCoins}
          icon="ripple"
          bigger={selected === 2}
          rotateY={'-12deg'}
        />
        <CurrencyName highlight={selected === 0}>Ripple</CurrencyName>
        <CurrencyName highlight={selected === 1}>Bitcoin</CurrencyName>
        <CurrencyName highlight={selected === 2}>Ethereum</CurrencyName>
      </CryptoCurrenciesContainer>
    )
  },
)
