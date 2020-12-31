import { Container, CssBaseline, Typography } from '@material-ui/core'
import Head from 'next/head'

export default function DefaultLayout({ title, children }) {
  return (
    <>
      <CssBaseline />

      <Head>
        <title>{title}</title>
      </Head>

      <Container maxWidth="md">
        <div className="root">
          <div className="title">
            <Typography variant="h1">{title}</Typography>
          </div>

          <div>{children}</div>
        </div>

        <style jsx>{`
          .root {
            text-align: center;
            padding-top: 2rem;
          }

          .title {
            margin-bottom: 2rem;
          }
        `}</style>
      </Container>
    </>
  )
}
