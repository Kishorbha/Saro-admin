import { useEffect, useState } from 'react'
import Favicon from 'react-favicon'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface Props {
  src?: string
  title?: string
}

const Title: React.FC<Props> = ({ src, title }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [titleState, setTitle] = useState(title || '')
  const [srcState, setSrc] = useState(src || '')

  useEffect(() => {
    setIsLoading(true)
    setSrc(src || '')
    setTitle(title || '')
    setIsLoading(false)
  }, [src, title])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <HelmetProvider>
      <Favicon url={srcState} />
      <Helmet>
        <title>{titleState}</title>
        <meta name='description' content='This is a description of page' />
      </Helmet>
    </HelmetProvider>
  )
}

export { Title }
