import React from "react";
import DeckGuideCard from "../components/DeckGuideCard";
import CardData from "../data/MetaDeckCardData";

const DeckLists = () => {
  const cards = CardData.map((item) => {
    return <DeckGuideCard title={item.deckTitle} image={item.image} description={item.description} />;
  });
  return <div>{cards}</div>;
};

export default DeckLists;
