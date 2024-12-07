import { TechnologyProps } from '@/type';
import PostgreIcon from '../SVGJSXElement/PostgreIcon';

const Postgre = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://www.postgresql.org/'
    className={classes}
    target='_blank'
    aria-label='postgre'
  >
    <PostgreIcon classes={svgClasses} />
  </a>
);

export default Postgre;
