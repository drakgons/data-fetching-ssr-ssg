// import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';

import { darkTheme } from '../themes';



function App({ Component, pageProps }) {
  return (

  <NextUIProvider theme={ darkTheme }>
    <Component {...pageProps} />
  </NextUIProvider>

  )
}

export default App
