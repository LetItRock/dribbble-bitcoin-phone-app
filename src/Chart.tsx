import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Line } from '@nivo/line'

const ChartContainer = styled.div``
const commonProperties = {
  width: 320,
  height: 300,
  margin: { top: 20, right: -10, bottom: 60, left: 2 },
  animate: true,
}
const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <defs>
      <filter
        id="dropshadow"
        x="-40%"
        y="-40%"
        width="180%"
        height="180%"
        filterUnits="userSpaceOnUse"
      >
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="5" dy="5" result="offsetblur" />
        <feOffset dx="-5" dy="-5" result="offsetblur" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle
      fill="#fff"
      r={size / 3}
      strokeWidth={borderWidth}
      stroke={borderColor}
      filter="url(#dropshadow)"
    />
  </g>
)
const initData = [
  {
    id: 'values',
    data: [
      { x: 0, y: 24605 },
      { x: 1, y: 20000 },
      { x: 2, y: 30300 },
      { x: 3, y: 34000 },
      { x: 4, y: 32000 },
    ],
  },
]
const data2 = [
  {
    id: 'values',
    data: [
      { x: 0, y: 20605 },
      { x: 1, y: 28000 },
      { x: 2, y: 36300 },
      { x: 3, y: 34000 },
      { x: 4, y: 39000 },
    ],
  },
]
export const Chart: React.SFC<any> = () => {
  const [data, setData] = React.useState(initData)
  const onMouseLeave = () => setData(initData)
  const onMouseEnter = () => setData(data2)
  return (
    <ChartContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Line
        {...commonProperties}
        data={data}
        curve="monotoneX"
        dotSize={0}
        dotBorderColor="inherit:darker(0.2)"
        axisLeft={false}
        axisBottom={false}
        enableGridX={false}
        enableGridY={false}
        enableSlices={true}
        colors={['#f6cad4']}
        enableArea={true}
        isInteractive={false}
        areaOpacity={0.07}
        tooltip={({ data }) =>
          data.map(d => (
            <div
              key={d.serie.id}
              style={{
                color: d.serie.color,
                padding: '3px 0',
              }}
            >
              <span>${d.data.y}</span>
            </div>
          ))
        }
      />
    </ChartContainer>
  )
}
