import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Timer cleared on component unmount');
    };
  }, []);

  return (
    <div className="container">
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default App;
