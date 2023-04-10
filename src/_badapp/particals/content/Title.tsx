import Favicon from 'react-favicon'
import { Helmet } from 'react-helmet'

interface Props {
  src?: string
  title?: string
}

export default function Title({ src, title }: Props) {
  return (
    <>
      <Favicon url={src} />
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content='This is a description of login page'
        />
      </Helmet>
    </>
  )
}
