import { useCallback, useEffect, useState } from "react";

export function NotUsingUseCallback() {
  return (
    <p>
      This component skips using <code>useCallback</code>: <Skipped />
      <br />
      This component doesn't properly adds it back in: <Fixed />
    </p>
  );
}

function Skipped() {
  const [text, setText] = useState("");

  const reset = () => {
    setText("");
  };

  return <Child reset={reset} setText={setText} text={text} />;
}

function Fixed() {
  const [text, setText] = useState("");

  const reset = useCallback(() => {
    setText("");
  }, []);

  return <Child reset={reset} setText={setText} text={text} />;
}

function Child({ reset, setText, text }) {
  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <>
      <label htmlFor="text">Text:</label>{" "}
      <input
        name="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />{" "}
    </>
  );
}
