import { Typography } from '@material-tailwind/react'

const DefaultTitle = () => {
  return (
    <Typography
      as='a'
      href=' #'
      className='mr-4 cursor-pointer py-1.5 font-medium'
    >
      <span className='lg:hidden'>SARO</span>
    </Typography>
  )
}

export { DefaultTitle }
