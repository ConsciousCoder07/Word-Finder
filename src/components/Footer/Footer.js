import './Footer.css'

const Footer = ({ lightMode }) => {
  return (
    <div
      className='footer'
      style={{
        backgroundColor: lightMode ? 'white' : '#282c34',
        color: lightMode ? 'black' : 'white',
      }}
    >
      <span
        className='name'
        style={{
          color: lightMode ? '#282c34' : 'white',
        }}
      >
        Made by{' '}
        <a
          href='https://www.linkedin.com/in/faizan-qazi-50248517a/'
          target='__blank'
          style={{
            color: lightMode ? '#282c34' : 'white',
          }}
        >
          Faizan Qazi
        </a>
      </span>
      <div className='iconContainer'>
        <a
          className='github'
          href='https://github.com/ConsciousCoder07'
          target='__blank'
          style={{
            color: lightMode ? '#282c34' : 'white',
          }}
        >
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a
          className='linkedin'
          href='https://www.linkedin.com/in/faizan-qazi-50248517a/'
          target='__blank'
          style={{
            color: lightMode ? '#282c34' : 'white',
          }}
        >
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
