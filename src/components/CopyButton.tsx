import { Button, ButtonProps, Snackbar, ThemeProvider } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { FC, PropsWithChildren, ReactElement } from 'react'
import useClipboard from 'react-use-clipboard'

interface WithThemeProps {
  theme?: Object
}

const WithTheme: FC<PropsWithChildren<WithThemeProps>> = ({
  theme,
  children,
}) =>
  theme ? (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ) : (
    (children as ReactElement<any, any>)
  )

interface CopyButtonProps {
  text: string
  theme?: Object
}

const CopyButton: FC<PropsWithChildren<CopyButtonProps & ButtonProps>> = ({
  text,
  theme,
  children,
  ...props
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 2000,
  })

  return (
    <>
      <WithTheme theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Button onClick={setCopied} {...props}>
          {children}
        </Button>
      </WithTheme>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isCopied}
      >
        <Alert severity="success">
          Copied to clipboard{text.length < 10 ? `: &quot;${text}&quot;` : ''}
        </Alert>
      </Snackbar>
    </>
  )
}

export default CopyButton
