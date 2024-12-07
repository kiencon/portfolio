import { TechnologyProps } from '@/type';
import VuetifyIcon from '../SVGJSXElement/VuetifyIcon';

const Vuetify = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://vuetifyjs.com/'
    className={classes}
    target='_blank'
    aria-label='vuetify'
  >
    <VuetifyIcon classes={svgClasses} />
  </a>
);

export default Vuetify;
