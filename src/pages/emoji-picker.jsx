import search from '@jukben/emoji-search'
import Head from 'next/head'
import { useState } from 'react'
import CharacterCopyButton from '../components/CharacterCopyButton'
import Grid from '../components/Grid'
import SearchBar from '../components/SearchBar'
import { useMediaQuerySwitch } from '../hooks'
import DefaultLayout from '../layouts/DefaultLayout'

/**
 * @param {string} query
 * @param {number?} maxLimit
 * @return {Character[]}
 */
function searchUnicodeCharacters(query, maxLimit = 48) {
  return search(query)
    .slice(0, maxLimit)
    .map((character) => ({
      symbol: character.char,
      name: character.name.toLowerCase().replace(/_/g, ' '),
    }))
}

/**
 * @returns {import('react').ReactElement}
 */
export default function EmojiPickerPage() {
  const [filter, setFilter] = useState('')
  const rowItems = useMediaQuerySwitch({
    small: 2,
    medium: 3,
    large: 4,
    extraLarge: 5,
  })

  const characters = searchUnicodeCharacters(filter, rowItems * 24)

  return (
    <DefaultLayout title="Emoji Picker">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="searchBar">
        <SearchBar
          placeholder="Filter…"
          autoFocus
          onChange={(event) => setFilter(event.target.value)}
        />
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
