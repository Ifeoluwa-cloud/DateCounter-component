import React, { useState } from 'react';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function prevHandler() {
    if (count >= 1) {
      setCount((c) => c - step);
    }
  }

  function nextHandler() {
    setCount((c) => c + step);
  }

  function prevBtn() {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }

  function nextBtn() {
    setStep((s) => s + 1);
  }

  return (
    <>
        <div className="Counter">
          <div>Count: {count}</div>
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>

        <div className="Steps">
          <div>Step: {step}</div>
          <button onClick={prevBtn}>Prev</button>
          <button onClick={nextBtn}>Next</button>
        </div>
    </>
  );
}
