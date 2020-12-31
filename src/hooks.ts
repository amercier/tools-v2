import { useMediaQuery, useTheme } from '@material-ui/core'
import { useEffect, useRef } from 'react'

/**
 * Create a ref and immediately trigger `.focus()` when available. This can be
 * useful because `autofocus` prop doesn't always work.
 * Read more: https://github.com/mui-org/material-ui/issues/6398
 * @param {boolean?} enabled
 * @returns {import('react').Ref}
 */
export function useForceAutofocus(enabled: boolean = true) {
  const inputRef = useRef<HTMLElement>()

  useEffect(() => {
    if (enabled && inputRef.current) {
      inputRef.current.focus()
    }
  }, [enabled])

  return inputRef
}

/**
 * Returns one of the given value, depending on the current viewport width.
 */
export function useMediaQuerySwitch<T = unknown>({
  small,
  medium = small,
  large = medium,
  extraLarge = large,
}: {
  small: T
  medium?: T
  large?: T
  extraLarge?: T
}) {
  const { breakpoints } = useTheme()
  const matchesMedium = useMediaQuery(breakpoints.up('sm'))
  const matchesLarge = useMediaQuery(breakpoints.up('md'))
  const matchesExtraLarge = useMediaQuery(breakpoints.up('lg'))

  if (matchesExtraLarge) return extraLarge
  if (matchesLarge) return large
  if (matchesMedium) return medium
  return small
}
