import React, { useReducer } from 'react';
import s from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className={s.counter}>
      <span className={s.value}>{state.count}</span>
      <div className={s.controls}>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          -1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          + 1
        </button>
      </div>
    </div>
  );
}
