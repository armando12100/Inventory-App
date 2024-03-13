import React, { useState } from 'react'

const Header = () => {

    const [dropdown, setDropdown] = useState(false);

  return (
    <div className='bg-indigo-950 text-white w-screen sticky top-0 z-50 py-3'>
        <div className='flex justify-between px-2'>
            <p>Lorcana.Ink</p>
            <div className='hidden sm:flex'>
                <p className='px-2'>Meta Report</p>
                <p className='px-2'>Cards</p>
                <p className='px-2'>Deck Lists</p>
                <p className='px-2'>Build Decks</p>
                <p className='px-2'>Sign in</p>
            </div>
            <div className='visible sm:hidden'>
                <div className='dropdown text-white cursor-pointer w-28'>
                    <p onClick={() => setDropdown((prev) => !prev)}>dropdown</p>
                    {dropdown ? (
                        <>
                        <div className='text-white bg-indigo-950 absolute w-28 py-3'>
                            <div className='border-b-2 border-gray-500 flex flex-col justify-center items-center'>
                                <h2 className='hover:underline py-1'>Meta Report</h2>
                                <h1 className='hover:underline py-1'>Deck Lists</h1>
                                <h1 className='hover:underline py-1'>Build Decks</h1>
                                <h1 className='hover:underline py-1'>Sign In</h1>
                            </div>
                        </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header