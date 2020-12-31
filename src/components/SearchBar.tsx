import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { FC } from 'react'
import { useForceAutofocus } from '../hooks'

interface SearchBarProps {
  placeholder?: string
  autoFocus?: boolean
  onChange: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Search…',
  autoFocus,
  onChange,
}) => {
  const inputRef = useForceAutofocus(autoFocus)

  return (
    <Paper>
      <div className="input">
        <IconButton disabled>
          <Search />
        </IconButton>
        <InputBase
          placeholder={placeholder}
          autoFocus={autoFocus}
          fullWidth
          inputRef={inputRef}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <style jsx>{`
        .input {
          display: flex;
        }
      `}</style>
    </Paper>
  )
}

export default SearchBar
