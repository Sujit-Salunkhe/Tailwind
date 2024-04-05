import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0)
  const handleClick= () => {
    setCount(count + 1)
    console.log(count)
    console.log(count)
  }
  return (
    <>
    <button onClick={handleClick}>{count}</button>
  
    </>
  )
}

export default App
