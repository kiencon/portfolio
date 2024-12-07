type CardProps = {
  title: string;
  description: string;
  JSXElementIcon: React.ElementType;
  date?: string;
};

const Card = ({ title, description, date, JSXElementIcon }: CardProps) => {
  return (
    <div className='pl-4 border-l border-gray-500 relative p-1 my-4'>
      <div className='text-textPrimary p-4 rounded my-2 bg-primary border-l-2 border-textPrimary'>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{date}</p>
        <p className='text-textSecondary'>{description}</p>
      </div>
      <JSXElementIcon className='w-4 h-4 absolute top-1 -left-2 animate-ping' />
    </div>
  );
};

export default Card;
