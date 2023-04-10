import { HTMLProps } from 'react'
import { VscLoading } from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'outline' | 'filled'
  loading?: boolean
  containerClass?: string
}

const GradientButton: React.FC<ButtonProps> = ({
  type,
  variant = 'outline',
  loading,
  containerClass,
  children,
  ...props
}) => {
  const outlineVariant =
    variant === 'outline' && 'bg-white dark:bg-primary-default'
  const filledVariant = variant === 'filled' && 'text-white'

  return (
    <div
      className={`bg-gradient p-[1.6px] h-12 text-white flex items-center justify-center rounded-full text-lg hover:opacity-80 active:opacity-80 ${
        loading && 'opacity-80 cursor-not-allowed'
      } ${containerClass}`}
    >
      <button
        {...props}
        className={`rounded-full px-5  font-bold w-full h-full select-none ${outlineVariant} ${filledVariant} ${
          loading && 'cursor-not-allowed'
        } ${props.className}`}
        type={type || 'button'}
        disabled={loading}
      >
        <span className='flex gap-x-2 items-center justify-center'>
          {loading ? (
            <IconContext.Provider
              value={{ className: 'dark:text-white text-md text-gray-300' }}
            >
              <VscLoading className='animate-spin' />
            </IconContext.Provider>
          ) : (
            children
          )}
        </span>
      </button>
    </div>
  )
}

export { GradientButton }
