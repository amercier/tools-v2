import babelParser from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import CodeFormatter from '../components/CodeFormatter'
import DefaultLayout from '../layouts/DefaultLayout'

const formatJSON = (input) =>
  input
    ? format(input, {
      parser: 'json',
      plugins: [babelParser],
    })
    : ''

export default function JsonFormatterPage() {
  return (
    <DefaultLayout title="JSON Formatter">
      <CodeFormatter
        format={formatJSON}
        language="json"
        helperText="Paste any JSON code..."
        autoFocus
      />
    </DefaultLayout>
  )
}
