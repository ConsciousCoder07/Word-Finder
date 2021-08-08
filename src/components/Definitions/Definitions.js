import './Definitions.css'
import ReactPlayer from 'react-player'

const Definitions = ({ word, meanings, category, lightMode }) => {
  return (
    <div className='meanings'>
      {meanings[0] && word && category === 'en' && (
        <div>
          <ReactPlayer
            className='react-player'
            url={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            width='100%'
            height='54px'
            playing={false}
            controls={true}
          />
        </div>
      )}

      {word === '' ? (
        <span className='subTitle'>Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div
                key={index}
                className='singleMeaning'
                style={{
                  backgroundColor: lightMode ? '#3b5360' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
              >
                {!index && (
                  <strong
                    className='part-of-speech'
                    style={{
                      backgroundColor: lightMode ? '#27363f' : '#587c92',
                    }}
                  >
                    <i>{item.partOfSpeech}</i>
                  </strong>
                )}
                <b>
                  {index + 1}. {def.definition}
                </b>

                {def.example && (
                  <span>
                    <hr
                      style={{
                        backgroundColor: 'black',
                        width: '100%',
                      }}
                    />
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms.length ? (
                  <span class='synonym'>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                ) : (
                  ''
                )}
                {def.antonyms.length ? (
                  <span class='antonym'>
                    <b>Antonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                ) : (
                  ''
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}

export default Definitions
