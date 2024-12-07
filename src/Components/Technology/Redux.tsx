import { TechnologyProps } from '@/type';
import ReduxIcon from '../SVGJSXElement/ReduxIcon';

const Redux = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://redux.js.org/'
    className={classes}
    target='_blank'
    aria-label='redux'
  >
    <ReduxIcon classes={svgClasses} />
  </a>
);

export default Redux;
