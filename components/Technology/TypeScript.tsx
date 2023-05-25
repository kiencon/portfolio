import { TTechnology } from "@/@type";
import TypeScriptIcon from "../SVGJSXElement/TypeScriptIcon";

const TypeScript = ({
  svgClasses,
  classes = "inline-block m-2",
}: TTechnology) => (
  <a href="https://www.typescriptlang.org/" className={classes} target="_blank">
    <TypeScriptIcon classes={svgClasses} />
  </a>
);

export default TypeScript;
