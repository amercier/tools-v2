import { TextField } from '@material-ui/core'
import { useForceAutofocus } from '../hooks'
import Code from './Code'

/**
 * @param {Object} props
 * @param {string} props.value
 * @param {string} [props.autoFocus]
 * @param {string} [props.error]
 * @param {string} [props.helperText]
 * @param {number} [props.maxRows]
 * @param {(value: string) => void} onChange
 * @returns {import('react').ReactElement}
 */
export default function CodeInput({
  input,
  autoFocus,
  error,
  helperText,
  maxRows,
  onChange,
}) {
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
      onInput={(event) => onChange(event.target.value)}
      error={!!error}
      helperText={error ? error.message.split('\n')[0] : helperText}
      rows={10}
      rowsMax={maxRows}
      inputRef={inputRef}
      InputProps={{ style }}
    />
  )
}
