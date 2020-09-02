import { Container } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

export default function App({ Component = null, pageProps = {} }) {
  // Exceptionally allow spreading because it's using Next.js API.
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Container>
  )
}
