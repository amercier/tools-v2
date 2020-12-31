import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps = {} }) => {
  // Exceptionally allow spreading because it's using Next.js API.
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Mono:wght&display=swap"
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

        pre,
        code {
          font-family: 'Roboto Mono', monospace;
        }
      `}</style>
    </>
  )
}

export default App
