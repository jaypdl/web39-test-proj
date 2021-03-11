import { useState, useEffect } from 'react'
import './App.css'

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000' + path
  } else {
    return path
  }
}

function App() {
  const [message, setMessage] = useState('hello There!')
  useEffect(() => {
    // fetch('/api/hello')
    //! will crash in development since server is on 5000, and react on 3000
    // fetch('http://localhost:5000/api/hello')
    fetch(getUrl('/api/hello'))
      .then((res) => res.json())
      .then((resBody) => setMessage(resBody.message))
      .catch((err) => {
        debugger
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>{message}</header>
    </div>
  )
}

export default App
