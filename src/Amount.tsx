import * as React from 'react'
import styled from 'styled-components'

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
const Value = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(53, 58, 110);
`

export const Amount: React.SFC<any> = () => {
  return (
    <AmountContainer>
      <Currency>$</Currency>
      <Value>24,605</Value>
    </AmountContainer>
  )
}
