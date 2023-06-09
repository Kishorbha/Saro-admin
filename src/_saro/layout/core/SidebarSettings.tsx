/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { useLayout } from './LayoutProvider'

type Props = {
  children?: React.ReactNode
}

const EnableSidebar = ({ children }: Props) => {
  const { config } = useLayout()
  const { sidebar } = config

  useEffect(() => {
    if (sidebar.display) {
      document.getElementById('kt_sidebar')?.classList.remove('d-none')
      document.body.classList.add('sidebar-enabled')
      document.getElementById('kt_sidebar_toggler')?.classList.remove('d-none')
    }
  }, [sidebar.display])

  return <>{children}</>
}

const DisableSidebar: FC = ({ children }: Props) => {
  useEffect(() => {
    document.getElementById('kt_sidebar')?.classList.add('d-none')
    document.body.classList.remove('sidebar-enabled')
    document.getElementById('kt_sidebar_toggler')?.classList.add('d-none')
  }, [])

  return <>{children}</>
}

export { EnableSidebar, DisableSidebar }
