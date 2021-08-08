import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core'
import './Header.css'
import '../../data/category'
import categories from '../../data/category'
import { debounce } from 'lodash'
import { useCallback } from 'react'

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#fff',
      },
      type: lightMode ? 'light' : 'dark',
    },
  })

  const handleChange = (language) => {
    setCategory(language)
    setWord('')
  }

  // debounce - limiting the rate at which a function gets invoked
  // debouncing the setWord event so that word doesn't change too often while we are typing
  const handleWord = debounce((text) => {
    setWord(text)
  }, 1000)

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Word Finder'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            label='Search a word'
            onChange={(e) => handleWord(e.target.value)}
            className='search'
          />
          <TextField
            select
            label='Language'
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className='select'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
