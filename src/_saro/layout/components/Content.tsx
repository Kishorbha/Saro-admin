import React from 'react'
import clsx from 'clsx'
import { useLayout } from '../core'

type Props = {
  children?: React.ReactNode
}

const Content = ({ children }: Props) => {
  const { classes } = useLayout()

  return (
    <div
      id='kt_content_container'
      className={clsx(classes.contentContainer.join(' '))}
    >
      {children}
    </div>
  )
}

export { Content }
