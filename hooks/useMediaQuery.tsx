import { useEffect, useState } from 'react'

export function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean>(false) // Default to `false` for better UX.

  useEffect(() => {
    if (typeof window === 'undefined') return // Check if we are on the server (SSR safety)

    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(!!mediaQueryList.matches)
    listener() // Initial check when component mounts

    // Use addEventListener and removeEventListener for better compatibility
    mediaQueryList.addEventListener('change', listener)

    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryString]) // Re-run on media query string change

  return matches
}
