import { TTechnology } from "@/@type";
import NodeJSIcon from "../SVGJSXElement/NodeJSIcon";

const NodeJS = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://nodejs.org/en" className={classes} target="_blank">
    <NodeJSIcon classes={svgClasses} />
  </a>
);

export default NodeJS;
