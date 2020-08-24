import '../styles/globals.css'

export default function App({ Component = null, pageProps = {} }) {
  // Exceptionally allow spreading because it's using Next.js API.
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
