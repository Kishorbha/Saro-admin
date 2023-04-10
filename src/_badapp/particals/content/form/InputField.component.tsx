import { HTMLProps, useState } from 'react'
import EyeFilledBlack from '../../../assets/svg/EyeFilledBlack'
import EyeCutFilledBlack from '../../../assets/svg/EyeCutFilledBlack'

interface InputType extends HTMLProps<HTMLInputElement> {
  type: 'text' | 'password'
  containerClass?: string

  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  errorMsg?: string
}

const InputField: React.FC<InputType> = ({
  containerClass,
  leftElement,
  rightElement,
  errorMsg,
  type,
  ...props
}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-y-2'>
      <label
        className={
          'flex rounded-full p-[1.6px] border border-white text-white  bg-primary-default  focus-within:bg-gradient '
        }
      >
        <div className='flex items-center bg-primary-default pl-5 pr-3 rounded-l-full '>
          {leftElement}
        </div>
        <input
          {...props}
          type={show ? 'text' : type}
          className='w-full outline-none bg-primary-default py-3 placeholder:text-white '
        />
        <div className='flex items-center bg-primary-default  pr-5 pl-3 rounded-r-full'>
          {type === 'password' ? (
            <div
              className='cursor-pointer'
              onClick={() => {
                setShow((pre) => !pre)
              }}
            >
              {show ? (
                <EyeFilledBlack className='w-5 h-5' />
              ) : (
                <EyeCutFilledBlack className='w-5 h-5' />
              )}
            </div>
          ) : (
            rightElement
          )}
        </div>
      </label>
      {errorMsg && (
        <p className=' text-xs font-normal text-secondary-300'>{errorMsg}</p>
      )}
    </div>
  )
}

export default InputField
