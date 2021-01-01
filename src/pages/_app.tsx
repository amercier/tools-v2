import type { AppProps } from 'next/app'
import { FC } from 'react'

const App: FC<AppProps> = ({ Component, pageProps = {} }) => {
  // Exceptionally allow spreading because it's using Next.js API.
  return (
    <>
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
