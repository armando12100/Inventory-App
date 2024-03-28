import React from "react";
import { useParams } from "react-router-dom";
import deckData from "../data/MetaDeckCardData"

const DeckDetails = () => {
  const { deckId } = useParams();
  const data = deckData[deckId]
  console.log(data)
  return (
    <>
      <div>{deckId}</div>
      <div>{data.deckTitle}</div>
    </>
  );
};

export default DeckDetails;
