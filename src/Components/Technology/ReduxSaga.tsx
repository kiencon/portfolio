import { TechnologyProps } from '@/type';
import ReduxSagaIcon from '../SVGJSXElement/ReduxSagaIcon';

const ReduxSaga = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://redux-saga.js.org/'
    className={classes}
    target='_blank'
    aria-label='redux saga'
  >
    <ReduxSagaIcon classes={svgClasses} />
  </a>
);

export default ReduxSaga;
