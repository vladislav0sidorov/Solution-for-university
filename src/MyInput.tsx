import { useEffect, useRef } from 'react'

export default function MyInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input {...props} ref={inputRef} />
}
