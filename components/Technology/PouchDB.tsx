import { TTechnology } from "@/@type";
import PouchDBIcon from "../SVGJSXElement/PouchDBIcon";

const PouchDB = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://pouchdb.com/" className={classes} target="_blank">
    <PouchDBIcon classes={svgClasses} />
  </a>
);

export default PouchDB;
