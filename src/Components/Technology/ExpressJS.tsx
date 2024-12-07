import { TechnologyProps } from '@/type';
import ExpressJSIcon from '../SVGJSXElement/ExprexssJSIcon';

const ExpressJS = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://expressjs.com/'
    className={classes}
    target='_blank'
    aria-label='expressJS'
  >
    <ExpressJSIcon classes={svgClasses} />
  </a>
);

export default ExpressJS;
