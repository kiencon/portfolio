import { TTechnology } from "@/@type";
import AlgoliaIcon from "../SVGJSXElement/AlgoliaIcon";

const Algolia = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://www.algolia.com/" className={classes} target="_blank">
    <AlgoliaIcon classes={svgClasses} />
  </a>
);

export default Algolia;
