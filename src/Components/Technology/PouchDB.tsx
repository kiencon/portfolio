import { TechnologyProps } from '@/type';
import PouchDBIcon from '../SVGJSXElement/PouchDBIcon';

const PouchDB = ({
  svgClasses,
  classes = 'inline-block m-2',
}: TechnologyProps) => (
  <a
    href='https://pouchdb.com/'
    className={classes}
    target='_blank'
    aria-label='pouchdb'
  >
    <PouchDBIcon classes={svgClasses} />
  </a>
);

export default PouchDB;
