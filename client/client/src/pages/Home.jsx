import React from 'react'
import InklandsPic from "../images/Inklands.jpg"
import MetaDeckCard from '../components/MetaDeckCard'
import Tiers from '../components/Tiers'
const Home = () => {
  return (
    <div className='bg-indigo-950 text-white pt-10 flex flex-col justify-center'>
      <div className='relative'>
        <img src={InklandsPic} alt="" className='min-h-64 object-cover opacity-30' />
        <div className='absolute top-1/3 pl-14'>
          <p className='font-bold lg:text-6xl sm:text-3xl'>Lorana Best Decks - Meta Report </p>
          <div className='pt-12 lg:text-2xl sm:text-lg'>Armando Sanchez 
            <span className='pl-6 lg:text-2xl sm:text-lg'>March 13, 2024</span>
            <p className='font-bold sm:text-2xl pt-10 lg:pt-16 lg:text-3xl'>The Best Meta Decks for Into the Inklands!</p>
          </div>
        </div>
      </div>
      <div className='pt-10 pl-8'>
        <p className='font-bold text-xl'>Current Best Decks &#40;Upated March 13, 2024 &#41;</p>
        <ul className='pt-4'>
        <Tiers />
        </ul>
      </div>
      <div>
        <MetaDeckCard />
      </div>
    </div>
  )
}

export default Home