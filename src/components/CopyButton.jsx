import { Button, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import useClipboard from 'react-use-clipboard'

/**
 * @param {Object} props
 * @param {string} props.text
 * @param {string} props.title
 * @returns {import('react').ReactElement}
 */
export default function CopyButton({ text, children, ...props }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 2000,
  })

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Button onClick={setCopied} {...props}>
        {children}
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isCopied}
      >
        <Alert severity="success">
          Copied to clipboard: &quot;{text}&quot;
        </Alert>
      </Snackbar>
    </>
  )
}
