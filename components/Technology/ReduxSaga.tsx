import { TTechnology } from "@/@type";
import ReduxSagaIcon from "../SVGJSXElement/ReduxSagaIcon";

const ReduxSaga = ({
  svgClasses,
  classes = "inline-block m-2",
}: TTechnology) => (
  <a href="https://redux-saga.js.org/" className={classes} target="_blank">
    <ReduxSagaIcon classes={svgClasses} />
  </a>
);

export default ReduxSaga;
