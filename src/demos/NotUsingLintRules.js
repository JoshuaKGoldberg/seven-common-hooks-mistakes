import { MissingDeps } from "./MissingDeps";

export function NotUsingLintRules() {
  return (
    <>
      <p>
        This would have all been caught by{" "}
        <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">
          eslint-plugin-react-hooks
        </a>
        !
      </p>
      <MissingDeps />
    </>
  );
}
