import React from 'react'

const DeckGuideCard = ({title, image, description}) => {
  return (
    <>
        <p className='font-bold text-2xl py-3 pl-3'>{title}</p>
        <img src={image} alt="" className='object-fill w-full lg:h-100'  />
        <p className='py-3 pl-3'>{description}</p>
    </>
  )
}

export default DeckGuideCard