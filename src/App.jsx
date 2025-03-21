import { useState } from 'react'
import './App.css'
import Calc from './components/calc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Calc />
    </>
  )
}

export default App
