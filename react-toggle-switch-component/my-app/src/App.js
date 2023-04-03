import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch.js';

function App() {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <ToggleSwitch isToggled={isToggled} onChange={() => setIsToggled(isToggled)} />
    </div>
  );
}

export default App;
