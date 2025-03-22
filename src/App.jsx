import { useState } from 'react'
import './App.css'
import Calc from './components/Calc'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Calc />
     <Analytics />
    </>
  )
}

export default App
