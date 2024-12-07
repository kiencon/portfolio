import { TechnologyProps } from '@/type';
import AlgoliaIcon from '../SVGJSXElement/AlgoliaIcon';

const Algolia = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://www.algolia.com/'
    className={classes}
    target='_blank'
    aria-label='algolia'
  >
    <AlgoliaIcon classes={svgClasses} />
  </a>
);

export default Algolia;
