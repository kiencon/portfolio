import { TTechnology } from "@/@type";
import NextJSIcon from "../SVGJSXElement/NextJSIcon";

const NextJS = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://nextjs.org/" className={classes} target="_blank">
    <NextJSIcon classes={svgClasses} />
  </a>
);

export default NextJS;
