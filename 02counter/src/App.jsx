import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter+1;
    if(counter < 20){
      setCounter(counter + 1);
    }
  };

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1 )
    }
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
