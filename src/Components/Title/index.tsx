type TitleProps = {
  content: string;
  classes?: string;
};

const Title = ({ content, classes }: TitleProps) => (
  <h2
    className={`text-textPrimary capitalize text-3xl text-left mb-6 ${classes ? classes : ''}`}
  >
    {content}
  </h2>
);

export default Title;
