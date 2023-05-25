import { TCard } from "@/@type";

const Card = ({ title, description, date, JSXElementIcon }: TCard) => {
  return (
    <div className="pl-4 border-l border-gray-500 relative p-1 my-4">
      <div className="text-textPrimary p-4 rounded my-2 bg-primary border-l-2 border-textPrimary">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{date}</p>
        <p className="text-textSecondary">{description}</p>
      </div>
      <JSXElementIcon />
    </div>
  );
};

export default Card;
