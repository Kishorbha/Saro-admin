import React from 'react'
import { useLocation } from 'react-router'
import { checkIsActive } from '../../../helpers'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  title: string
  Icon?: any
  FilledIcon?: any
}

const AsideMenuItemWithSub: React.FC<Props> = ({
  to,
  title,
  Icon,
  FilledIcon,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)

  return (
    <Link
      to={to}
      className={`flex max-h-11 gap-3 rounded-lg font-semibold items-center px-[1rem] py-[.5rem] text-white hover:bg-gray-800 select-none ${
        isActive && 'bg-gray-800  '
      } $`}
    >
      {isActive ? (
        <FilledIcon className='w-6 h-6/>' />
      ) : (
        <Icon className='w-6 h-6' />
      )}
      {title}
    </Link>
  )
}

export { AsideMenuItemWithSub }
