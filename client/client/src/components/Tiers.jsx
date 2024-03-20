import React from "react";
import {tiers} from "../data/TierData"
import TiersCard from "./TiersCard";

const Tiers = () => {
    const cards = tiers.map(item => {
        return (
            <TiersCard 
            key={item.id}
            tier={item.tier}
            deck1={item.deck1}
            deck2={item.deck2}
            deck3={item.deck3}
            deck4={item.deck4}
            />
        )
    })
  return (
    <>
      {cards}
    </>
  );
};

export default Tiers;
