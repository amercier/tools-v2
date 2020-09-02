import { Container } from 'next/app'
import Head from 'next/head'

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

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}
