import { useState } from 'react'
import { useMediaQuerySwitch } from '../hooks'
import Code from './Code'
import CodeInput from './CodeInput'
import Grid from './Grid'

/**
 * @param {Object} props
 * @param {string} props.language
 * @param {boolean} [props.autoFocus]
 * @param {string} [props.helperText]
 * @param {(input: string) => string | Promise<string>} props.format
 * @returns {import('react').ReactElement}
 */
export default function CodeFormatter({
  language,
  autoFocus,
  helperText,
  format = (input) => input,
}) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleInputChange(value) {
    setInput(value)
    setLoading(true)
    setError('')
    setOutput('')

    let formatted
    try {
      formatted = (await format(value)) || ''
    } catch (formatError) {
      formatted = value
      setError(formatError)
    }

    setOutput(formatted)
    setLoading(false)
  }

  const columns = useMediaQuerySwitch({
    small: 1,
    large: 2,
  })

  const maxRows = useMediaQuerySwitch({
    small: 20,
    large: 50,
  })

  return (
    <div className="formatter">
      <Grid gap="1rem" columns={columns}>
        <CodeInput
          input={input}
          onChange={handleInputChange}
          error={error}
          maxRows={maxRows}
          autoFocus={autoFocus}
          helperText={loading ? 'Loading...' : helperText}
        />
        <Code language={language} error={error}>
          {output}
        </Code>
      </Grid>

      <style jsx>
        {`
          .formatter {
            font-size: 13px;
          }
        `}
      </style>
    </div>
  )
}
