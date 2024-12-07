import { TechnologyProps } from '@/type';
import VueIcon from '../SVGJSXElement/VueIcon';

const Vue = ({ svgClasses, classes = 'inline-block m-2' }: TechnologyProps) => (
  <a
    href='https://vuejs.org/'
    className={classes}
    target='_blank'
    aria-label='vuejs'
  >
    <VueIcon classes={svgClasses} />
  </a>
);

export default Vue;
