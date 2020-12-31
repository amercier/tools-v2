import { createMuiTheme } from '@material-ui/core'
import { FC, PropsWithChildren } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark'
import CopyButton from './CopyButton'

SyntaxHighlighter.registerLanguage('json', json)

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

interface CodeProps {
  language: string
  error?: Error | null
  children?: string | null
}

const Code: FC<CodeProps> = ({ language, error, children }) => {
  const text = error ? error.message : children
  return (
    <div className="container">
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        showLineNumbers={!error}
        customStyle={{
          margin: '0',
          padding: '1rem',
        }}
      >
        {text || ' '}
      </SyntaxHighlighter>

      <div className="copyButton">
        <CopyButton
          text={text || ''}
          theme={darkTheme}
          disabled={!children || !!error}
        >
          Copy
        </CopyButton>
      </div>

      <style jsx>{`
        .container {
          position: relative;
        }

        .copyButton {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Code
