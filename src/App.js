import './App.css';
import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [display, setDisplay] = React.useState(0);
  const [invaild, setInvaild] = React.useState("");

  const displayHandle = function (el) {
    setDisplay(
      prev => prev === 0 ? el : prev + el
  )}

  /* function isValid(expr) {
    try{
      eval(expr);
      return true;
    }
    catch{
      return false;
    }
  } */
  function isValid(expr) {
    const nums = [1, 2, 3, 4, 5];
    /* const expression = display.split(""); */
    /* console.log(expression); */
    return true;
  }

  console.log([1,5,7]);
  function getResult() {
    if(isValid(display)) {
      setDisplay(eval(display))
    } else {
      setInvaild("Invalid Expression!");
      setDisplay("");
    }
  }

  function clearDisplay() {
    setInvaild("");
    setDisplay(0);
  }

  function backSpace() {
    let input = display.slice(0, -1);
    setDisplay(input)
  }
  return (
    <div className='container'>
      <div className='app'>
        <div className='current-operation'>
         {display}{invaild}
        </div>

        <Buttons display={displayHandle} equal={getResult}
         clearDisplay={clearDisplay} backSpace={backSpace} 
         isValid={invaild} currentValue={display}/>

      </div>
    </div>
  );
}

export default App;
