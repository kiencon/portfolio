import { TTechnology } from "@/@type";
import PostgreIcon from "../SVGJSXElement/PostgreIcon";

const Postgre = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://www.postgresql.org/" className={classes} target="_blank">
    <PostgreIcon classes={svgClasses} />
  </a>
);

export default Postgre;
