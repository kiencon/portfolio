import { TTechnology } from "@/@type";
import VueIcon from "../SVGJSXElement/VueIcon";

const Vue = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://vuejs.org/" className={classes} target="_blank">
    <VueIcon classes={svgClasses} />
  </a>
);

export default Vue;
