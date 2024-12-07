import Link from 'next/link';

type AnchorButtonProps = {
  name: string;
  classes?: string;
  href: string;
};

const AnchorButton = ({ name, href, classes }: AnchorButtonProps) => {
  return (
    <Link
      href={href}
      className={`hover:text-textSecondary text-textPrimary inline-block bg-primary p-2 rounded w-48 ${classes ? classes : ''}`}
    >
      {name}
    </Link>
  );
};

export default AnchorButton;
