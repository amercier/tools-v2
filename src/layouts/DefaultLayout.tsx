import { Container, CssBaseline, Typography } from '@material-ui/core'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

interface DefaultLayoutProps {
  title: string
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <CssBaseline />

      <Head>
        <title>{title}</title>
      </Head>

      <Container maxWidth="md">
        <div className="root">
          <div className="title">
            <Typography variant="h2" component="h1">
              {title}
            </Typography>
          </div>

          <div>{children}</div>
        </div>

        <style jsx>{`
          .root {
            padding-top: 2rem;
          }

          .title {
            margin-bottom: 2rem;
            text-align: center;
          }
        `}</style>
      </Container>
    </>
  )
}

export default DefaultLayout
