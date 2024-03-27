import DeckGuideCard from "../components/DeckGuideCard";
import CardData from "../data/MetaDeckCardData";

const DeckLists = () => {
  const cards = CardData.map((item) => {
    return <DeckGuideCard key={item.id} title={item.deckTitle} image={item.image} description={item.description} code={item.code}/>;
  });
  return <div>{cards}</div>;
};

export default DeckLists;
