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
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function prevHandler() {
    if (count >= 1) {
      setCount((c) => c - step);
    }
  }

  function nextHandler() {
    setCount((c) => c + step);
  }

  function prevBtn() {
    if (step >= 0) {
      setStep((s) => s - 1);
    }
  }

  function nextBtn() {
    setStep((s) => s + 1);
  }

  function handleReset() {
    setCount(0)
    setStep(1);
  }

  return (
    <>
        <div className="Counter">
          <div>
              <input 
                  type='range' 
                  min="0" max="10" 
                  value={step} 
                  onChange={e=>setStep(Number(e.target.value))}>
              </input>
              <span>Step: {step}</span>
          </div>
          
          <div>Step: {step}</div>
          <button onClick={prevBtn}>Prev</button>
          <button onClick={nextBtn}>Next</button>
          <div>Count: {count}</div>
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>
        <p>
          <span>
            {count === 0 
            ? "Today is " 
            : count > 0 
            ? `${count} days from today is ` 
            : `${Math.abs(count)} days ago was  `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {count !== 0 || step !== 1 ? (
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null 
        }
    </>
  );
}
