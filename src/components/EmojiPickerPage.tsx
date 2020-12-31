import search from '@jukben/emoji-search'
import Head from 'next/head'
import { FC, useState } from 'react'
import { useMediaQuerySwitch } from '../hooks'
import DefaultLayout from '../layouts/DefaultLayout'
import CharacterCopyButton from './CharacterCopyButton'
import Grid from './Grid'
import SearchBar from './SearchBar'

function searchUnicodeCharacters(query: string, maxLimit: number = 48) {
  return search(query)
    .slice(0, maxLimit)
    .map((character) => ({
      symbol: character.char,
      name: character.name.toLowerCase().replace(/_/g, ' '),
    }))
}

const EmojiPickerPage: FC<{}> = () => {
  const [filter, setFilter] = useState('')
  const rowItems = useMediaQuerySwitch<number>({
    small: 2,
    medium: 3,
    large: 4,
    extraLarge: 5,
  })

  const characters = searchUnicodeCharacters(filter, rowItems * 10)

  return (
    <DefaultLayout title="Emoji Picker">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="searchBar">
        <SearchBar placeholder="Filter…" autoFocus onChange={setFilter} />
      </div>

      <Grid columns={rowItems}>
        {characters.map(({ name, symbol }) => (
          <CharacterCopyButton key={symbol} name={name} symbol={symbol} />
        ))}
      </Grid>

      <style jsx>{`
        .searchBar {
          margin: 0 auto 3rem auto;
          max-width: 40rem;
        }
      `}</style>
    </DefaultLayout>
  )
}

export default EmojiPickerPage
