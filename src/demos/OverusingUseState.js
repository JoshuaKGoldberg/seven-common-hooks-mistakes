import { useEffect, useState } from "react";

export function OverusingUseState() {
  return (
    <p>
      This component uses two pieces of state, even though it only needs one:{" "}
      <Overused maximum={7} />
      <br />
      This component doesn't make the same mistake: <Fixed maximum={7} />
    </p>
  );
}

function Overused({ maximum }) {
  const [count, setCount] = useState(0);
  const [capped, setCapped] = useState(0);

  useEffect(() => {
    setCapped(Math.min(count, maximum));
  }, [count, maximum]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} type="button">
      {capped} times out of {maximum} {" "}
    </button>
  );
}

function Fixed({ maximum }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(Math.min(count + 1, maximum));
  }

  return (
    <button onClick={handleClick} type="button">
      {count} times out of {maximum} {" "}
    </button>
  );
}
