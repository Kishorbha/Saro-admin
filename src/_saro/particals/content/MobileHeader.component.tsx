import BadappLogo from '../../../public/BadAppLogo.png'

const MobileHeader = () => {
  return (
    <div className='flex h-full items-center px-4'>
      <img
        src={BadappLogo}
        className='h-[36px] aspect-auto w-auto'
        alt='badapp'
      />
    </div>
  )
}

export default MobileHeader
