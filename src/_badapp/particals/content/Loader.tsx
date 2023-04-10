import LoadingGradient from '../../assets/svg/LoadingGradient'

export const Loader = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <LoadingGradient className={'text-3xl w-16 h-16 animate-spin'} />
    </div>
  )
}
