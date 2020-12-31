import babelParser from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import { FC } from 'react'
import CodeFormatter from '../components/CodeFormatter'
import DefaultLayout from '../layouts/DefaultLayout'

const formatJSON = (input: string) =>
  input
    ? format(input, {
        parser: 'json',
        plugins: [babelParser],
      })
    : ''

const JsonFormatterPage: FC<{}> = () => {
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

export default JsonFormatterPage
