import Image from "next/image";

const Neo4JIcon = ({ classes }: { classes: string }) => (
  <Image
    src="/images/neo4j.png"
    alt="aws icon"
    width={48}
    height={48}
    className={`${classes}`}
    priority={true}
  />
);

export default Neo4JIcon;
