import Image from "next/image";

const AWSIcon = ({ classes }: { classes: string }) => (
  <Image
    src="/images/aws-icon.png"
    alt="aws icon"
    width={48}
    height={48}
    className={`${classes}`}
    priority={true}
  />
);

export default AWSIcon;
