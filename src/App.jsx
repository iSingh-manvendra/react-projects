import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1)
    }
    console.log(counter)
  }

  const decreaseValue = () => {
    if (counter  > 0) {
      setCounter(counter - 1)
    }
    console.log(counter)
  }
  return (
    <>
      <h1>chai or React</h1>
      <h2>counter value: {counter <= 20 ? counter : 20 && counter >= 0 ? counter : 0}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={decreaseValue}>decrease value {counter}</button>

    </>
  )
}

export default App
