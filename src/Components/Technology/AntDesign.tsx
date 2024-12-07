import { TechnologyProps } from '@/type';
import AntIcon from '../SVGJSXElement/AntIcon';

const AntDesign = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://ant.design/'
    className={classes}
    target='_blank'
    aria-label='antdesign'
  >
    <AntIcon classes={svgClasses} />
  </a>
);

export default AntDesign;
