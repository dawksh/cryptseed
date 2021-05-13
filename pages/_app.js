import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource/inter/700.css"


function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      heading: "Inter"
    }
  })
  return (
    <ChakraProvider
      theme={theme}
    >
      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
