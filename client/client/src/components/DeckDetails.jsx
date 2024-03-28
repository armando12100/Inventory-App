import { useParams } from "react-router-dom";
import deckData from "../data/MetaDeckCardData"
import Youtube from 'react-youtube'

const DeckDetails = () => {
  const { deckId } = useParams();
  const data = deckData[deckId]
  console.log(data)

  const opts = {
    height: '500',
    width: '95%'
  }
  return (
    <>
      <h1 className="font-bold text-2xl pt-2 pl-3 text-center">{data.deckTitle}</h1>
      <Youtube videoId="Y5k3qiO17nc" opts={opts} className="flex justify-center bg-indigo-950" />
      <img src={data.image} alt="" className="object-fill w-full lg:h-100 pt-2" />
      <p className="py-3 pl-3 font-bold">{data.description}</p>
      <p className="py-3 pl-3 font-bold">{data.description}</p>
      <p className="py-3 pl-3 font-bold">{data.description}</p>
    </>
  );
};

export default DeckDetails;
