import { useState } from 'react'
import Calculator from './Component/Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator/>
    </>
  )
}

export default App
