import babelParser from 'prettier/parser-babel'
import { format } from 'prettier/standalone'
import Code from './Code'

export default {
  component: Code,
  title: 'Code',
}

export const Json = Code
Json.args = {
  language: 'json',
  children: JSON.stringify(
    {
      glossary: {
        title: 'example glossary',
        GlossDiv: {
          title: 'S',
          GlossList: {
            GlossEntry: {
              ID: 'SGML',
              SortAs: 'SGML',
              GlossTerm: 'Standard Generalized Markup Language',
              Acronym: 'SGML',
              Abbrev: 'ISO 8879:1986',
              GlossDef: {
                para:
                  'A meta-markup language, used to create markup languages such as DocBook.',
                GlossSeeAlso: ['GML', 'XML'],
              },
              GlossSee: 'markup',
            },
          },
        },
      },
    },
    null,
    1,
  ),
}

export const JsonWithError = Json.bind({})
try {
  format(
    `{
      glossary: {
        title: 'example glossary',
        GlossDiv: {
          title: 'S,
        }
      }
    }`,
    { parser: 'json', plugins: [babelParser] },
  )
} catch (error) {
  JsonWithError.args = {
    error,
  }
}
