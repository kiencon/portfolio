import { TTechnology } from "@/@type";
import VuetifyIcon from "../SVGJSXElement/VuetifyIcon";

const Vuetify = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a href="https://vuetifyjs.com/" className={classes} target="_blank">
    <VuetifyIcon classes={svgClasses} />
  </a>
);

export default Vuetify;
