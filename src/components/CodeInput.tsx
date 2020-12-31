import { TextField } from '@material-ui/core'
import { FC } from 'react'
import { useForceAutofocus } from '../hooks'

interface CodeInputProps {
  input: string
  autoFocus?: boolean
  error?: Error | null
  helperText?: string
  maxRows?: number
  onChange: (value: string) => void
}

const CodeInput: FC<CodeInputProps> = ({
  input,
  autoFocus,
  error,
  helperText,
  maxRows,
  onChange,
}) => {
  const inputRef = useForceAutofocus(autoFocus)
  const style = {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 'inherit',
  }

  return (
    <TextField
      variant="outlined"
      multiline
      value={input}
      onInput={(event) => onChange((event.target as HTMLInputElement).value)}
      error={!!error}
      helperText={error ? error.message.split('\n')[0] : helperText}
      rows={10}
      rowsMax={maxRows}
      inputRef={inputRef}
      InputProps={{ style }}
    />
  )
}

export default CodeInput
