import { IconButton, InputBase, Paper } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useForceAutofocus } from '../hooks'

export default function SearchBar({
  placeholder = 'Search…',
  autoFocus,
  onChange,
}) {
  const inputRef = useForceAutofocus(autoFocus)

  return (
    <Paper>
      <div className="input">
        <IconButton disabled>
          <Search />
        </IconButton>
        <InputBase
          variant="outlined"
          placeholder={placeholder}
          autoFocus={autoFocus}
          fullWidth
          inputRef={inputRef}
          onChange={onChange}
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
