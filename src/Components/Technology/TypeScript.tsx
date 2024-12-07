import { TechnologyProps } from '@/type';
import TypeScriptIcon from '../SVGJSXElement/TypeScriptIcon';

const TypeScript = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://www.typescriptlang.org/'
    className={classes}
    target='_blank'
    aria-label='typescript'
  >
    <TypeScriptIcon classes={svgClasses} />
  </a>
);

export default TypeScript;
