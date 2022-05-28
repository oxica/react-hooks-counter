import React from 'react';
import s from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={s.controls}>
    <button type="button" onClick={onDecrement}>
      -1
    </button>
    <button type="button" onClick={onIncrement}>
      + 1
    </button>
  </div>
);

export default Controls;
