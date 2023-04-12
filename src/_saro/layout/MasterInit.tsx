import { useEffect, useRef } from 'react'

import { useLayout } from './core'

export function MasterInit() {
  const { config } = useLayout()
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
    }
  }, [config])

  return <></>
}
