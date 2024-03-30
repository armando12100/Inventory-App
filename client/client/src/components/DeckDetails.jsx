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
      <Youtube videoId={data.youtube} opts={opts} className={`flex justify-center bg-gradient-to-r
      ${data.gradientStart} ${data.gradientEnd} border-4 border-solid border-white rounded-lg p-2`} />
      <img src={data.image} alt="" className="object-fill w-full lg:h-100 pt-1" />
      <h1 className="font-bold pl-4 text-2xl mt-2 text-indigo-900">General Deck Strategy</h1>
      <p className="py-3 pl-3 font-bold">{data.general}</p>
      <h1 className="font-bold pl-4 text-2xl mt-2  text-indigo-900">General Mulligan Advice</h1>
      <p className="py-3 pl-3 font-bold">{data.mulliganPlay}</p>
      <p className="py-3 pl-3 font-bold">{data.mulliganDraw}</p>
      <h1 className="font-bold pl-4 text-2xl mt-2  text-indigo-900">Deck Weaknesses</h1>
      <p className="py-3 pl-3 font-bold">{data.weaknesses}</p>
      <h1 className="font-bold pl-4 text-2xl mt-2  text-indigo-900">Tips</h1>
      <p className="py-3 pl-3 font-bold">{data.tip1}</p>

    </>
  );
};

export default DeckDetails;
