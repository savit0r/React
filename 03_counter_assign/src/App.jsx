import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter + 1);
    }
    else{
      setCounter(20);
    }
    
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    }
    else setCounter(0)
  }


  return (
    <>
    <h1>The Click Counter</h1>
    <h2>Counter value : {counter}</h2>
    <div>
      <button onClick={addValue}>Add value</button>
    </div>
    <br/>
    <div>
      <button onClick={removeValue}>Remove value</button>
    </div>
    </>
  )
}

export default App
