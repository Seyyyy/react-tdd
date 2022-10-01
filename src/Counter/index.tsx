import { useState } from "react";

type Props = {
  title: string;
};

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <title>{props.title}</title>
      <p>{count}</p>
      <button onClick={onClick}>add count</button>
    </div>
  );
};

export default Counter;
