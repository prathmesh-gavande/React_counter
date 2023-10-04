import { useState } from 'react'
import './App.css'

function App() {

  // usestate hook is use to reflect the  changes in variable where they use 
  let [counter,setCounter]=useState(5)
  // [variableName, function]= hookName (default value of variable)

  // without hook we want to use queryselector after that change each and every occurance of that variable

  let add = () =>{

    // let result=counter+1
    // setCounter(result)
    //or 

    setCounter(counter=counter+1);
  }

  let substract =() => {
    setCounter(counter=counter-1);
  }
  return (
    <>
      <h1>Counter Value: {counter}</h1>

      <button 
      onClick={add}
      >Increment</button>

      <br />
      <br />

      <button 
      onClick={substract}
      >Decrement</button>
    </>
  )
}

export default App
