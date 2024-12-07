import Image from "next/image";

const AboutIcon = ({ classes }: { classes: string }) => (
  <Image
    src={"/images/algolia.png"}
    width={64}
    height={64}
    alt="algolia icon"
    priority={true}
    className={`${classes} bg-white rounded`}
  />
);

export default AboutIcon;
