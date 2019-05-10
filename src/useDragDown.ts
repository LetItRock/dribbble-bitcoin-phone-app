import * as React from 'react'
import { useGesture } from 'react-use-gesture'

type MaxDistanceFunc = (ref: React.MutableRefObject<HTMLElement>) => number
interface Props {
  ref: React.MutableRefObject<HTMLElement>
  config: {
    override?: any
    maxDistance: number | MaxDistanceFunc
    maxDistanceHit?: ({ cancel }: { cancel: () => void }) => boolean
  }
}
export const useDragDown = ({ ref, config }: Props) => {
  const { override, maxDistance, maxDistanceHit } = config
  const [
    { startY, distance, dragging, canceled, first, last },
    setDistance,
  ] = React.useState({
    startY: 0,
    distance: 0,
    dragging: false,
    canceled: false,
    first: false,
    last: false,
  })

  const bind = useGesture(
    {
      onDrag: ({
        delta: [_, deltaY],
        distance,
        dragging,
        first,
        last,
        event,
        cancel,
      }) => {
        event.stopPropagation()
        event.preventDefault()

        const maxDist =
          typeof maxDistance === 'function' ? maxDistance(ref) : maxDistance
        let startYToSet = startY
        let distanceToSet = distance
        if (first) {
          setDistance({
            canceled: false,
            startY: startYToSet,
            distance: distanceToSet,
            dragging,
            first,
            last,
          })
          return
        }
        if (last || !dragging) {
          startYToSet = 0
          distanceToSet = 0
        }
        if (deltaY < 0) {
          distanceToSet = 0
        } else if (dragging && deltaY > maxDist) {
          distanceToSet = maxDist
          const canceled = !!(maxDistanceHit && maxDistanceHit({ cancel }))
          setDistance({
            canceled: canceled,
            startY: startYToSet,
            distance: distanceToSet,
            dragging,
            first,
            last,
          })
        }
        setDistance({
          canceled: canceled,
          startY: startYToSet,
          distance: distanceToSet,
          dragging,
          first,
          last,
        })
      },
      ...override,
    },
    { domTarget: ref } as any,
  )
  React.useEffect(() => {
    bind()
  }, [bind, ref.current])

  return {
    translateY: startY + distance,
    dragging,
    canceled,
    first,
    last,
  }
}
