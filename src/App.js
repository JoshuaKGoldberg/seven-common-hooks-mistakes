import { useState } from "react";

import "./App.css";
import { MissingDeps } from "./demos/MissingDeps";
import { NotUsingHooks } from "./demos/NotUsingHooks";
import { NotUsingLintRules } from "./demos/NotUsingLintRules";
import { NotUsingUseCallback } from "./demos/NotUsingUseCallback";
import { OverusingUseCallback } from "./demos/OverusingUseCallback";
import { OverusingUseState } from "./demos/OverusingUseState";
import { UsingOutdatedState } from "./demos/UsingOutdatedState";

export function App() {
  const [current, setCurrent] = useState();

  return (
    <main className="App">
      <h1>Click a button to toggle showing that demo.</h1>
      <ol>
        {[
          ["Not Using Hooks", NotUsingHooks],
          ["Overusing useState", OverusingUseState],
          ["Missing Deps", MissingDeps],
          ["Not Using Lint Rules", NotUsingLintRules],
          ["Not Using useCallback", NotUsingUseCallback],
          ["Overusing useCallback", OverusingUseCallback],
          ["Using Outdated State", UsingOutdatedState],
        ].map(([text, demo]) => (
          <li key={text}>
            <button
              onClick={() =>
                setCurrent(current?.text === text ? undefined : [text, demo])
              }
              type="button"
            >
              {text}
            </button>
          </li>
        ))}
      </ol>
      <hr />
      {current
        ? (() => {
            const [text, Component] = current;
            return (
              <>
                <h2>{text}</h2>
                <Component />
              </>
            );
          })()
        : null}
    </main>
  );
}
