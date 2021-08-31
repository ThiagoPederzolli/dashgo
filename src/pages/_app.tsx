import { ChakraProvider } from "@chakra-ui/react"
import { ReactQueryDevtools } from 'react-query/devtools'
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from 'react-query'
import { SideBarDrawerProvider } from "../context/SideBarDrawerContext"
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
