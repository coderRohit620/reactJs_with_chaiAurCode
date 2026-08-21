import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <>
      <h1 className='text-4xl text-center text-white mt-6'>Password Genrator</h1>
    </>
  )
}

export default App
