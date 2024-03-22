import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg-indigo-950 text-white sticky top-0 z-50 py-3">
      <div className="flex justify-between">
        <Link to="/">
          <p className="flex justify-center pl-4 font-bold">Lorcana.Ink</p>
        </Link>
        <div className="hidden sm:flex">
          <Link to="/metareport" className="hover:underline">
            <p className="font-bold pr-2">Meta Report</p>
          </Link>
          <Link to="/cards" className="hover:underline">
            <p className="font-bold pr-2">Cards</p>
          </Link>
          <Link to="/decklists" className="hover:underline">
            <p className="font-bold pr-2">Deck Lists</p>
          </Link>
          <Link to="/createdecks" className="hover:underline">
            <p className="font-bold pr-2">Build Decks</p>
          </Link>
          <Link to="/signin" className="hover:underline">
            <p className="font-bold pr-2">Sign in</p>
          </Link>
        </div>
        <div className="visible sm:hidden">
          <div className="dropdown text-white cursor-pointer pr-4">
            <p onClick={() => setDropdown((prev) => !prev)}>dropdown</p>
            {dropdown ? (
              <>
                <div className="text-white bg-indigo-950 absolute w-28 py-3 right-0">
                  <div className="border-b-2 border-gray-500 flex flex-col justify-center items-center w-28">
                    <Link to="/metareport">
                      <h2
                        className="hover:underline py-1"
                        onClick={() => setDropdown((prev) => !prev)}
                      >
                        Meta Report
                      </h2>
                    </Link>
                    <Link to="/decklists">
                      <h1
                        className="hover:underline py-1"
                        onClick={() => setDropdown((prev) => !prev)}
                      >
                        Deck Lists
                      </h1>
                    </Link>
                    <Link to="/createdecks">
                      <h1 className="hover:underline py-1"
                      onClick={() => setDropdown((prev) => !prev)}>Build Decks</h1>
                    </Link>
                    <Link to="/signin">
                      <h1 className="hover:underline py-1"
                      onClick={() => setDropdown((prev) => !prev)}>Sign In</h1>
                    </Link>
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
  );
};

export default Header;
