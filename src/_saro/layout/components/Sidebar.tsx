import BadappLogo from '../../assets/svg/BadappLogoGradient'
import AsideMenuMain from './aside/AsideMenuMain'

const Sidebar = () => {
  return (
    <div className=' hidden  md:flex md:flex-col md:gap-y-6 '>
      <div className='flex  items-center overflow-hidden h-9 my-8'>
        <BadappLogo className='w-40' />
      </div>
      <AsideMenuMain />
    </div>
  )
}

export { Sidebar }
