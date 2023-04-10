import DevilHeadOutlineGradient from '../../assets/svg/DevilHeadOutlineGradient'
import { FiUser } from 'react-icons/fi'
import React from 'react'

interface Props {
  src?: string
  alt?: string
  loader?: boolean
  resolutionClass?: string
  message?: React.ReactNode
}

export default function Avatar({
  src,
  alt,
  loader,
  resolutionClass,
  message,
}: Props) {
  return (
    <div
      className={`flex items-center justify-center relative ${
        resolutionClass ? resolutionClass : 'sm:w-20 sm:h-20 w-16 h-16'
      }  aspect-square`}
    >
      <div className='w-[68%] h-[68%] overflow-hidden mt-[14%] rounded-full'>
        {loader || !src ? (
          <div
            role='status'
            className='flex justify-center items-center max-w-sm w-full aspect-square rounded-full bg-gray-300 animate-pulse dark:bg-gray-700'
          >
            {message ? message : <FiUser size={24} />}
          </div>
        ) : (
          src && (
            <img
              src={src}
              alt={alt || ''}
              width={200}
              height={200}
              placeholder='blur'
              className='w-full h-full  object-cover object-center'
            />
          )
        )}
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <DevilHeadOutlineGradient className='w-full  h-full' />
      </div>
    </div>
  )
}
