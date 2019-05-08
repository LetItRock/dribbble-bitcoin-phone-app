import * as React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { useBouncing } from './useBouncing'

const AmountContainer = styled(animated.div)`
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
const Value = styled(animated.div)``

export const Amount: React.SFC<any> = ({ translateY }) => {
  const props = useSpring({
    config: {
      duration: 2000,
    },
    value: 24605,
    from: {
      value: 0,
    },
  })
  const style = useBouncing({ translateY })

  return (
    <AmountContainer style={style}>
      <Currency>$</Currency>
      <Value
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'rgb(53, 58, 110)',
          transition: '2s ease-out',
          transitionProperty: 'background-color, color, opacity',
        }}
        {...props}
      >
        {props.value.interpolate(val => Math.round(val))}
      </Value>
    </AmountContainer>
  )
}
