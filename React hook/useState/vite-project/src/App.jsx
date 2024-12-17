import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function addNumber(){
    setCount(prevCount=>prevCount+1)
    console.log(count);
  }
  function CutNumber(){
    setCount(prevCount=>prevCount-1)
    console.log(count);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={addNumber}>+</button>
      <button onClick={CutNumber}>-</button>
    </>
  )
}

export default App
