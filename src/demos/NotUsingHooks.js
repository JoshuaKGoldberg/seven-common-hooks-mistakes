import { useEffect, useState } from "react";

export function NotUsingHooks() {
  return (
    <>
      <p>
        Use hooks! The new docs site is pretty great:{" "}
        <a href="https://beta.reactjs.org">https://beta.reactjs.org</a>.
      </p>
      <Counter maximum={7} />
    </>
  );
}

function Counter({ maximum }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.min(count, maximum));
  }, [count, maximum]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} type="button">
      You pressed me {count} times out of {maximum}{" "}
    </button>
  );
}
