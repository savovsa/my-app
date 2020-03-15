import React, { useState } from "react";
import Button from "../Button";

export function sayHello() {}

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)} text="Increment" />
    </section>
  );
};

export default Counter;
