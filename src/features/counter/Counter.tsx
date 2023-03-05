import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment } from "./counterSlice";
import styles from "./Counter.module.css";
import { RootState } from "../../app/store";

export const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
