import { TTechnology } from "@/@type";
import AWSIcon from "../SVGJSXElement/AWSIcon";

const AWS = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://aws.amazon.com/" className={classes} target="_blank">
    <AWSIcon classes={svgClasses} />
  </a>
);

export default AWS;
