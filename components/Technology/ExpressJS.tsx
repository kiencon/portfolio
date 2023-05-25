import { TTechnology } from "@/@type";
import ExpressJSIcon from "../SVGJSXElement/ExprexssJSIcon";

const ExpressJS = ({
  svgClasses,
  classes = "inline-block m-2",
}: TTechnology) => (
  <a href="https://expressjs.com/" className={classes} target="_blank">
    <ExpressJSIcon classes={svgClasses} />
  </a>
);

export default ExpressJS;
