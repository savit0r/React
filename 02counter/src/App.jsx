import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () =>{
    counter = counter -1;
    setCounter(counter);
  }

  return (
    <>
    <h1> Chai aur Code</h1>
    <h2>Counter value : {counter}</h2>

    <div>
    <button
    onClick={addValue}>Add value</button>
    </div>
    <br/>
    <div>
      <button
      onClick={removeValue}>Remove value</button>
    </div>
    </>
  )
}

export default App
