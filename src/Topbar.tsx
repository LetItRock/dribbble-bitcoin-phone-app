import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
  margin-bottom: 1rem;
  > span {
    font-size: 1rem;
    font-weight: bold;
  }
`
const Right = styled.div`
  > svg {
    margin-right: 5px;
  }
`

export const Topbar: React.SFC<any> = () => {
  return (
    <TopbarContainer>
      <span>9:41</span>
      <Right>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="10.667"
          viewBox="0 0 17 10.667"
        >
          <path
            id="Cellular_Connection"
            data-name="Cellular Connection"
            d="M16,10.667H15a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V9.667A1,1,0,0,1,16,10.667Zm-4.667,0h-1a1,1,0,0,1-1-1V3.334a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1V9.667A1,1,0,0,1,11.334,10.667Zm-4.667,0h-1a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v4A1,1,0,0,1,6.666,10.667ZM2,10.667H1a1,1,0,0,1-1-1v-2a1,1,0,0,1,1-1H2a1,1,0,0,1,1,1v2A1,1,0,0,1,2,10.667Z"
            transform="translate(0 0)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.333"
          height="11"
          viewBox="0 0 15.333 11"
        >
          <path
            id="Wifi"
            d="M7.667,11a.314.314,0,0,1-.222-.093L5.439,8.885a.31.31,0,0,1-.094-.231.316.316,0,0,1,.1-.227,3.437,3.437,0,0,1,4.437,0,.315.315,0,0,1,.009.458L7.889,10.907A.314.314,0,0,1,7.667,11ZM11.19,7.451a.313.313,0,0,1-.215-.086,4.928,4.928,0,0,0-6.612,0,.313.313,0,0,1-.215.086.308.308,0,0,1-.22-.091L2.768,6.189a.322.322,0,0,1,0-.46,7.192,7.192,0,0,1,9.791,0,.323.323,0,0,1,.1.23.319.319,0,0,1-.095.23L11.409,7.36A.309.309,0,0,1,11.19,7.451Zm2.669-2.693a.3.3,0,0,1-.215-.088,8.68,8.68,0,0,0-11.955,0,.307.307,0,0,1-.435,0L.094,3.5a.323.323,0,0,1,0-.457,10.948,10.948,0,0,1,15.141,0,.323.323,0,0,1,0,.457l-1.161,1.17A.306.306,0,0,1,13.859,4.758Z"
            transform="translate(0 0)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.328"
          height="11.333"
          viewBox="0 0 24.328 11.333"
        >
          <g id="Battery" transform="translate(-0.333 -0.333)">
            <g
              id="Border"
              transform="translate(0.333 0.333)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="1"
              opacity="0.35"
            >
              <rect width="22" height="11.333" rx="2.667" stroke="none" />
              <rect
                x="0.5"
                y="0.5"
                width="21"
                height="10.333"
                rx="2.167"
                fill="none"
              />
            </g>
            <path
              id="Cap"
              d="M0,0V4A2.17,2.17,0,0,0,1.328,2,2.17,2.17,0,0,0,0,0"
              transform="translate(23.333 4)"
              opacity="0.4"
            />
            <rect
              id="Capacity"
              width="18"
              height="7.333"
              rx="1.333"
              transform="translate(2.333 2.333)"
            />
          </g>
        </svg>
      </Right>
    </TopbarContainer>
  )
}
