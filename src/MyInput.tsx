import { useEffect, useRef } from 'react'

export default function MyInput({
  shouldFocus,
  value,
  onChange
}: {
  shouldFocus: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (shouldFocus) {
      ref.current?.focus()
    }
  }, [shouldFocus])

  return <input ref={ref} value={value} onChange={onChange} />
}
