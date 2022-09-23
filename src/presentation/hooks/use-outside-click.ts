import { useEffect, useRef } from 'react'

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLUListElement>()

  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}
