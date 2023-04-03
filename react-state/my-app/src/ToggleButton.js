import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);

  console.log('useState:', isClicked); // false on mount; true on re-render
  function handleClick() {
    console.log('before setter:', isClicked); // false
    setIsClicked(!isClicked);
    console.log('after setter:', isClicked); // false because the data referencing the state hasn't updated.
  }

  // return on line 22 re-renders the ToggleButton component, re-running the code.
  return (
    <button
        style={{ backgroundColor: isClicked ? color : 'white'}}
        onClick={ handleClick }
    >
        {text}
    </button>
  );
}
