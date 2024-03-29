
// eslint-disable-next-line react/prop-types
const TiersCard = ({tier, deck1, deck2, deck3, deck4}) => {
  return (
    <>
          <h1 className='font-bold border-b-2'>{tier}</h1>
          <ul className="pt-2">
            <li className="pb-2 hover:underline hover:cursor-pointer">{deck1}</li>
            <li className="pb-2 hover:underline hover:cursor-pointer">{deck2}</li>
            <li className="pb-2 hover:underline hover:cursor-pointer">{deck3}</li>
            <li className="pb-2 hover:underline hover:cursor-pointer">{deck4}</li>
          </ul>
        </>
  )
}

export default TiersCard