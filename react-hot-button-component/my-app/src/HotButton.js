import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ text, color }) {
  const [clicks, setClicks] = useState(0);

  console.log('useState:', clicks);
  function changeTemperature() {
    setClicks(clicks + 1);
  }
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
    <button style={{ backgroundColor: color }}
            className="hot-button"
            onClick={ changeTemperature }>
      {text}
    </button>
  );
}
