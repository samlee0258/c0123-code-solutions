import { useState, useEffect } from 'react';
import './HotButton.css';

export default function HotButton({ text }) {
  // we are creating a state called clicks and initializing it to null with setClicks as the setter.
  const [clicks, setClicks] = useState(0);
  console.log('clicks:', clicks);
  // passes an anynomous callback function where if clicks is truthy run the console.log
  // this useEffect will only run when the state clicks is changed
  useEffect(() => {
    clicks && console.log('clicks:', clicks)
  }, [clicks]);

  function changeTemperature() {
    // setClicks is being called with a callback function with param prevClicks
    // prevClicks is added by 1 and the result of that expressions is being returned out of the callback function and used by setClicks
    // prevClicks represents clicks
    setClicks((prevClicks) => prevClicks + 1);
  }

  let color = '';
  if (clicks <= 3) {
    color = 'blue';
  } else if (clicks <= 6) {
    color = 'purple';
  } else if (clicks <= 9) {
    color = 'red';
  } else if (clicks <= 12) {
    color = 'orange';
  } else if (clicks <= 15) {
    color = 'yellow';
  } else if (clicks <= 18) {
    color = 'white';
  }

  return (
    <button
      style={{ backgroundColor: color }}
      className="hot-button"
      onClick={changeTemperature}
    >
      {text}
    </button>
  );
}
