import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DeckGuideCard = ({ title, image, description, code, pageId }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl pt-2 pl-3">{title}</h1>
      {image ? (
        <img src={image} alt="" className="object-fill w-full lg:h-100 pt-2" />
      ) : (
        ""
      )}
      <Link to={code}>
        <p className="font-bold pt-4 pl-2 hover:underline hover:cursor-pointer">
          {code}
        </p>
      </Link>
      <p className="py-3 pl-3">{description}</p>
      {image ? (
        <Link to={`/decklists/${pageId}`}>
          <button className="bg-indigo-950 border-2 text-white rounded-lg border-solid border-black ml-4 p-2 font-bold hover:cursor-pointer hover:bg-white hover:text-black">
            {title} Deck Guide
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default DeckGuideCard;
