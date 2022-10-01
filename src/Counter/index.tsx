import React, { useState } from "react";
import styles from "./counter.module.css";

type Props = {
  title: string;
};

export const addCount = (count: number) => {
  return count + 1;
};

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(addCount(count));
  };

  return (
    <div className={styles.root}>
      <title>{props.title}</title>
      <p data-testid="counter-result">{count}</p>
      <button data-testid="counter-button" onClick={onClick}>
        add count
      </button>
    </div>
  );
};

export default Counter;
