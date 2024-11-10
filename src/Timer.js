import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleClear = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div class='class1'>
      <h1>Timer: {count}s</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Timer;
