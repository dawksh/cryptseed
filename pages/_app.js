import '../styles/globals.css'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: "Inter"
        }
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
