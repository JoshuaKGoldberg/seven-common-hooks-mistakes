import { useState } from "react";

export function UsingOutdatedState() {
  return (
    <p>
      This component logs an outdated state member to the console: <Outdated />
      <br />
      This component doesn't make the same mistake: <Fixed />
    </p>
  );
}

function Outdated() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("Count is now", count);
  }

  return (
    <button onClick={handleClick} type="button">
      I've been clicked {count} time(s)
    </button>
  );
}

function Fixed() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const updated = count + 1;
    setCount(updated);
    console.log("Count is now", updated);
  }

  return (
    <button onClick={handleClick} type="button">
      I've been clicked {count} time(s)
    </button>
  );
}
