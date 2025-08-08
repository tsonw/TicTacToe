import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundGame from './Components/BackgroundGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundGame />
    </>
  )
}

export default App
