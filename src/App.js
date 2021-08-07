import { Container } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Definitions from './components/Definitions/Definitions'
import Header from './components/Header/Header'

function App() {
  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState('')
  const [category, setCategory] = useState('en')

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )

      setMeanings(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // console.log('meanings')
  useEffect(() => {
    dictionaryApi()
    // eslint-disable-next-line
  }, [word, category])

  return (
    <div
      className='App'
      style={{ height: '100vh', background: '#282c34', color: 'white' }}
    >
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly',
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  )
}

export default App
