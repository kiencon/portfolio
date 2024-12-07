import { TechnologyProps } from '@/type';
import NodeJSIcon from '../SVGJSXElement/NodeJSIcon';

const NodeJS = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://nodejs.org/en'
    className={classes}
    target='_blank'
    aria-label='nodejs'
  >
    <NodeJSIcon classes={svgClasses} />
  </a>
);

export default NodeJS;
