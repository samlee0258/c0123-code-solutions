import React from 'react';
import './App.css';
import './ToggleSwitch.css';

export default function ToggleSwitch() {

  return (
    <div className='App-header'>
      <label className='switch'>
        <input type="checkbox" />
        <span class="slider round" />
      </label>
    </div>
  );
}
