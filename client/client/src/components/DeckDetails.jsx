import { useParams } from "react-router-dom";
import deckData from "../data/MetaDeckCardData"
import Youtube from 'react-youtube'

const DeckDetails = () => {
  const { deckId } = useParams();
  const data = deckData[deckId]
  console.log(data)

  const opts = {
    height: '450',
    width: '80%'
  }
  return (
    <>
      <h1 className="font-bold text-2xl pt-2 pb-2 pl-3 text-center
       bg-indigo-950 text-white mt-1">{data.deckTitle}</h1>
      <Youtube videoId={data.youtube} opts={opts} className="flex justify-center bg-indigo-900
      border-4 border-solid border-white rounded-lg p-2" />
      <img src={data.image} alt="" className="object-fill w-full lg:h-100 pt-1" />
      <p className="py-3 pl-3 font-bold">{data.description}</p>
      <p className="py-3 pl-3 font-bold">{data.description}</p>
      <p className="py-3 pl-3 font-bold">{data.description}</p>
    </>
  );
};

export default DeckDetails;
