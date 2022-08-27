import React, { useState, useReducer } from 'react';
//imported useReducer

function App() {

const [count, setCount] = useState(4)
//removed setTheme state here

function decrementCount(){
  setCount(prevCount => prevCount - 1)
  //removed setTheme state here
}


function incrementCount() {
  setCount(prevCount => prevCount + 1)
  //removed setTheme state here
}
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
