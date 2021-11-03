import { useEffect, useState } from "react";

export function MissingDeps() {
  return (
    <p>
      This component forgets to include a dependency (<code>count</code>):{" "}
      <Missing />
      <br />
      This component doesn't make the same mistake: <Fixed />
    </p>
  );
}

function Missing() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`${text} has count ${count}`);
  }, [text]);

  return (
    <div>
      <label for="count">Count:</label>{" "}
      <input
        onChange={(event) => setCount(event.target.valueAsNumber)}
        type="number"
        value={count}
      />
      <label for="text">Text:</label>{" "}
      <input
        text="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />{" "}
    </div>
  );
}

function Fixed() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`${text} has count ${count}`);
  }, [count, text]);

  return (
    <div>
      <label htmlFor="count">Count:</label>{" "}
      <input
        onChange={(event) => setCount(event.target.valueAsNumber)}
        type="number"
        value={count}
      />
      <label htmlFor="text">Text:</label>{" "}
      <input
        text="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />{" "}
    </div>
  );
}
