import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-container">
      <h1>Hey gurl, you know what time it is?</h1>
      <h2>Don't worry if not, there's a clock below.</h2>
      <p className="ticker">{dateTime}</p>
    </div>
  )
}

export default App
