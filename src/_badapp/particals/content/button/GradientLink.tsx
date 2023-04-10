import { MouseEventHandler } from 'react'
import { Href } from '../link/Href'

interface IGradientLink {
  children?: React.ReactNode
  href: string
  className?: string
  variant?: 'outline' | 'filled'
  onClick?: MouseEventHandler
}

export default function GradientLink(props: IGradientLink) {
  const variant = props.variant || 'outline'
  const className = props.className || ''

  const outlineVariant =
    variant === 'outline' && 'bg-white dark:bg-primary-default '
  const filledVariant = variant === 'filled' && 'text-white'

  return (
    <div
      className={'bg-gradient p-[1.6px] h-12 rounded-full text-lg ' + className}
      onClick={props.onClick}
    >
      <Href
        href={props.href}
        className={`rounded-full h-full flex  items-center justify-center font-bold w-full  text-center select-none ${outlineVariant} ${filledVariant}`}
      >
        <span
          className={`text-md font-semibold ${
            outlineVariant && 'text-transparent  bg-clip-text bg-gradient'
          }`}
        >
          {props.children}
        </span>
      </Href>
    </div>
  )
}
