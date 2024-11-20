import { useState } from 'react'
import { Position } from './App'

export default function Box({
  children,
  color,
  position,
  onMove
}: {
  children: React.ReactNode
  color: string
  position: Position
  onMove(dx: number, dy: number): void
}) {
  const [lastCoordinates, setLastCoordinates] = useState<Position | null>(null)

  function handlePointerDown(e: any) {
    e.target.setPointerCapture(e.pointerId)
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY
    })
  }

  function handlePointerMove(e: any) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY
      })
      const dx = e.clientX - lastCoordinates.x
      const dy = e.clientY - lastCoordinates.y
      onMove(dx, dy)
    }
  }

  function handlePointerUp(e: any) {
    setLastCoordinates(null)
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
        ${position.x}px,
        ${position.y}px
        )`
      }}
    >
      {children}
    </div>
  )
}
