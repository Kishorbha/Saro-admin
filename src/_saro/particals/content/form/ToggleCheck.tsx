import { HTMLProps } from 'react'

// hooks

interface IToggleCheck extends HTMLProps<HTMLInputElement> {
  label?: string
  errorMsg?: string
}

export default function ToggleCheck({
  label,
  errorMsg,
  ...props
}: IToggleCheck) {
  return (
    <div className='flex flex-col gap-y-1'>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input type='checkbox' {...props} className='sr-only peer' />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient"></div>
        {label && (
          <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            {label}
          </span>
        )}
      </label>
      {errorMsg && (
        <p className='mt-2 text-xs font-normal text-secondary-300'>
          {errorMsg}
        </p>
      )}
    </div>
  )
}
