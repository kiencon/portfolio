import Neo4JIcon from '@/Components/SVGJSXElement/Neo4JIcon';
import { TechnologyProps } from '@/type';

const Neo4J = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://nextjs.org/'
    className={classes}
    target='_blank'
    aria-label='neo4j'
  >
    <Neo4JIcon classes={svgClasses} />
  </a>
);

export default Neo4J;
