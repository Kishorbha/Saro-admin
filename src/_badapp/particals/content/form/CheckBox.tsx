import { HTMLProps } from 'react'

// icons
import { TiTick } from 'react-icons/ti'

interface ICheckBox extends HTMLProps<HTMLInputElement> {
  label?: string
  containerClass?: string
  errorMsg?: string
}

export default function CheckBox({
  label,
  containerClass,
  errorMsg,
  ...props
}: ICheckBox) {
  return (
    <div className='flex flex-col gap-y-1'>
      <label
        className={
          'flex item-center gap-2 cursor-pointer w-max ' + containerClass
        }
      >
        <div className='relative border-[1.6px] border-black flex items-center dark:border-white w-6 h-6 overflow-hidden rounded-md'>
          <input className='hidden peer/checkbox' type='checkbox' {...props} />
          <div className='flex justify-center items-center absolute w-6 h-6 top-[-1.6px] left-[-1.6px] transition duration-300 ease-out bg-gradient opacity-0 peer-checked/checkbox:opacity-100'>
            <TiTick size='1.5rem' color='white' />
          </div>
        </div>
        {label && <p className='select-none'>{label}</p>}
      </label>
      {errorMsg && (
        <p className='mt-2 text-xs font-normal text-secondary-300'>
          {errorMsg}
        </p>
      )}
    </div>
  )
}
