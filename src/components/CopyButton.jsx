import { Button, Snackbar, ThemeProvider } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import useClipboard from 'react-use-clipboard'

const WithTheme = ({ theme, children }) =>
  theme ? <ThemeProvider theme={theme}>{children}</ThemeProvider> : children

/**
 * @param {Object} props
 * @param {string} props.text
 * @param {Object} [props.theme]
 * @returns {import('react').ReactElement}
 */
export default function Copy({ text, theme, children, ...props }) {
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
