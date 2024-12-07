import { TechnologyProps } from '@/type';
import JavascriptIcon from '../SVGJSXElement/JavascriptIcon';

const Javascript = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://www.javascript.com/'
    className={classes}
    target='_blank'
    aria-label='javascript'
  >
    <JavascriptIcon classes={svgClasses} />
  </a>
);

export default Javascript;
