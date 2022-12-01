import type { AppProps } from 'next/app'

import Image from 'react-bootstrap/Image'
//import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
