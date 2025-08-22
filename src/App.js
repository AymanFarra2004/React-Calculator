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
  function isValid() {
    const oper = ["+", "*", "-", "/", "%", "(", ")"];
    const expr = String(display).split("");
    let index = 0;
    if( (/\d|\.|\-/.test(expr[0])) &&
  (/\d|\./.test(expr[expr.length - 1])) ){
      for(let c of expr) {
        if (oper.includes(c)) {
          if(oper.includes(expr[index + 1])) {
            return false;
          }
        }
        index++;
      }
      return true;
    } else {
      return false;
    }
  }

  function getResult() {
    if(isValid()) {
      const result = eval(display); 
      setDisplay(String(result));
      setInvaild("");
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


const validInput =
["0" , "1", "2", "3", "4", "5", "6", "7", "8", "9", "+",
  "-", "*", "/", "%", "(", ")", "Backspace", "Enter", "Escape", "."];

const inputs = ["0" , "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "(", ")", "+", "-", "*", "/", "%"];
React.useEffect(() => {
  const handleKeyDown = (e) => {
    if (validInput.includes(e.key)) {
      const btnEffect = document.querySelector(`button[value="${e.key}"]`);
      if(btnEffect) {
        btnEffect.style.transform = "translateY(2px)";
        setTimeout(() => {
          btnEffect.style.transform = "";
        }, 100);
      }
      if (inputs.includes(e.key)) {
        displayHandle(e.key);
      } else if (e.key === "Enter") {
        getResult();
      } else if (e.key === "Backspace") {
        backSpace();
      } else if(e.key === "Escape") {
        clearDisplay();
      }
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [display, invaild]);


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
