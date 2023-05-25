import { TTechnology } from "@/@type";
import ReduxIcon from "../SVGJSXElement/ReduxIcon";

const Redux = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://redux.js.org/" className={classes} target="_blank">
    <ReduxIcon classes={svgClasses} />
  </a>
);

export default Redux;
