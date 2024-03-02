import logo from './logo.svg';
import './App.css'
  // App.js
import React, { useState } from 'react';
import './App.css';

function CounterApp() {
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (value) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  return (
    <div className="counter-app">
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={() => handleAdd(1)}>+1</button>
        <button onClick={() => handleAdd(-1)}>-1</button>
        <button onClick={() => handleAdd(10)}>+10</button>
        <button onClick={() => handleAdd(-10)}>-10</button>
      </div>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default CounterApp;

