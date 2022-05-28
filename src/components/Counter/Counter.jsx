import React, { useState } from 'react';
import s from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.counter}>
      <span className={s.value}>{count}</span>
      <div className={s.controls}>
        <button type="button" onClick={() => setCount(state => state + 1)}>
          -1
        </button>
        <button type="button" onClick={() => setCount(state => state - 1)}>
          + 1
        </button>
      </div>
    </div>
  );
}
