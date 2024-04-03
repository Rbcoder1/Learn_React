
import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(15)  

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
    console.log(counter)
  }

  return (
    <>
      <h1>
        Hello React Counter !
      </h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>add value {counter} </button> <br /><br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
