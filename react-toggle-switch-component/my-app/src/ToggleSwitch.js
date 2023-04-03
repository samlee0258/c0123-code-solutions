import React from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {

  return (
    <>
      <label className='switch'>
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </>
  );
}
