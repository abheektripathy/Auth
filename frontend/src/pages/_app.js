// import Head from "next/head"

// function App({ Component, pageProps }) {
//   return(
//     <>
//     <Head>
//       <title>hello</title>
//       <meta name = 'viewport' content = 'width = device-width, initial scale = 1' />
//       <link href = ''>
        
//       </link>
//     </Head>
//   <Component {...pageProps} />
//     </>
//   )
// }

// export default App

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp