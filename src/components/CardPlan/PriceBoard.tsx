import Card from ".";
import { cards } from "../../mocks/cards";

function PriceBoard() {
  return (
    <div className="flex gap-8">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default PriceBoard;
