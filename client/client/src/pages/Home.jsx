import React from 'react'
import InklandsPic from "../images/Inklands.jpg"

const Home = () => {
  return (
    <div className='bg-indigo-950 text-white pt-10 flex flex-col justify-center'>
      <img src={InklandsPic} alt="" className='min-h-64 object-cover' />
      <div>
        <p className='font-bold text-3xl'>Lorana Best Decks - Meta Report </p>
        <p className='pt-10'>Armando Sanchez 
          <span className='pl-6'>March 13, 2024</span> 
          <span className='pl-6'>10-min read</span>
          <p className='font-bold text-2xl pt-10'>The Best Meta Decks for Into the Inklands!</p>
        </p>
      </div>
      <div className='pt-10'>
        <p className='font-bold text-xl'>Current Best Decks &#40;Upated March 13, 2024 &#41;</p>
        <ul className='pt-4'>
        <h1>S-Tier</h1>
          <ul className='pl-5 pt-2'>
            <li className='pb-2'>1. Amethyst/Ruby Location Control</li>
            <li className='pb-2'>2. Sapphire/Steel Ramp Wheel</li>
            <li className='pb-2'>3. Amethyst/Steel Jafar Wheel</li>
            <li className='pb-2'>4. Emerald/Steel Control</li>
          </ul>
        <h1>A-Tier</h1>
        <ul className='pl-5 pt-2'>
          <li className='pb-2'>1. Amber/Steel Steelsongs</li>
          <li className='pb-2'>2. Emerald/Steel Discard</li>
          <li className='pb-2'>3. Ametheyst/Emeral Tempo</li>
          <li className='pb-2'>4. Ruby/Sapphire Pawpsicle Control</li>
        </ul>
        <h1>B-Tier</h1>
          <ul className='pl-5 pt-2'>
            <li className='pb-2'>1. Amber/Amethyst Hyper Aggro</li>
            <li className='pb-2'>2. Ruby/Steel Pirates</li>
            <li className='pb-2'>3. Amber/Ruby Mufasa</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Home