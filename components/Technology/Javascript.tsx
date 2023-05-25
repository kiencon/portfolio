import { TTechnology } from "@/@type";
import JavascriptIcon from "../SVGJSXElement/JavascriptIcon";

const Javascript = ({
  svgClasses,
  classes = "inline-block m-2",
}: TTechnology) => (
  <a href="https://www.javascript.com/" className={classes} target="_blank">
    <JavascriptIcon classes={svgClasses} />
  </a>
);

export default Javascript;
