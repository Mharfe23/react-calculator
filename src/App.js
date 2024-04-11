import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault();
    setResult(result + Number(inputRef.current.value));
    inputRef.current.value="";
    document.querySelector("input").focus();
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult(result - Number(inputRef.current.value));
    inputRef.current.value="";
    document.querySelector("input").focus();
  	// Add the code for the minus function 
  };
 
  function times(e) { 
    e.preventDefault();
    setResult(result * Number(inputRef.current.value));
    inputRef.current.value="";
    document.querySelector("input").focus();
    // Add the code for the plus function 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    try {
    setResult(result / Number(inputRef.current.value));
    inputRef.current.value="";
    document.querySelector("input").focus();}
    catch(error){
      console.error(error);
    }
    
    // Add the code for the divide function 
    };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value="";
    inputRef.current.focus();
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
    document.querySelector("input").focus();
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {/* add the value of the current total */result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Sub</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Devide</button>
        <button onClick={resetInput}>Reset</button>
        <button onClick={resetResult}>ResetResult</button>

        {/* Add the subtract button */} 
        {/* Add the multiply button */} 
        {/* Add the divide button */} 
        {/* Add the resetInput button */} 
        {/* Add the resetResult button */} 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
