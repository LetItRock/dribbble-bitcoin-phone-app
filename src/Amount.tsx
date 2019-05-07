import * as React from 'react'
import styled from 'styled-components'
import AnimatedNumber from 'react-animated-number'

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Currency = styled.span`
  color: rgb(206, 211, 223);
  margin-top: 5px;
  margin-right: 5px;
  font-size: 1.125rem;
`
const Value = styled.span``

export const Amount: React.SFC<any> = () => {
  return (
    <AmountContainer>
      <Currency>$</Currency>
      <AnimatedNumber
        component="text"
        value={24605}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'rgb(53, 58, 110)',
          transition: '2s ease-out',
          transitionProperty: 'background-color, color, opacity',
        }}
        frameStyle={perc => (perc === 100 ? {} : { backgroundColor: '#fff' })}
        duration={2000}
        stepPrecision={0}
      />
    </AmountContainer>
  )
}
