import { useCallback, useState } from "react";

export function OverusingUseCallback() {
  return (
    <p>
      This component unnecessarily uses <code>useCallback</code>:{" "}
      <Unnecessary />
      <br />
      This component doesn't make the same mistake: <Fixed />
    </p>
  );
}

function Unnecessary() {
  const [text, setText] = useState("");

  const onChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <>
      <label htmlFor="text">Text:</label>
      <input text="text" onChange={onChange} value={text} />{" "}
    </>
  );
}

function Fixed() {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <label htmlFor="text">Text:</label>
      <input text="text" onChange={onChange} value={text} />{" "}
    </>
  );
}
