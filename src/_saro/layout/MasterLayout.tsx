import { Outlet } from 'react-router-dom'
import { Content } from './components/Content'
import { Sidebar } from './components/Sidebar'
import { HeaderWrapper } from './components/header/HeaderWrapper'

const MasterLayout = () => {
  return (
    <div className='flex max-w-full h-screen  justify-center mx-auto '>
      <div className='lg:block  hidden w-[16%]  p-3 bg-black'>
        <Sidebar />
      </div>
      <div className='w-full mb-20 lg:mb-0 lg:w-[84%]'>
        <div className='flex flex-col flex-row-fluid'>
          <HeaderWrapper />
          <div className='content  flex-col flex-column-fluid'>
            <Content>
              <Outlet />
            </Content>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MasterLayout }
