import { NavLink } from 'react-router-dom'

interface HrefProps {
  href: string
  className?: string
  children: React.ReactNode
}

export const Href: React.FC<HrefProps> = ({ href, className, children }) => {
  return (
    <NavLink to={href} className={className}>
      {children}
    </NavLink>
  )
}
