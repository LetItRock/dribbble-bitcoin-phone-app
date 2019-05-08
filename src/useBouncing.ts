import * as React from 'react'
import { useSpring, config } from 'react-spring'

export const useBouncing = ({ translateY }) => {
  const translate = y => `translateY(${y}px)`
  const [{ y }, set] = useSpring(() => ({
    config: config.wobbly,
    y: 0,
  }))
  React.useEffect(() => {
    set({ y: translateY })
  }, [translateY])

  return {
    transform: y.interpolate(translate),
  }
}
