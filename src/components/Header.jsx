import React, { useState } from "react";

function Header({ onSearch ,userData }) {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    onSearch(username);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className="">
      <nav className="border-white bg-header_bg p-4 border-b border-opacity-25">
        <div className="flex justify-between items-center mx-auto container">
          <strong className="font-semibold text-white text-xl">GitHub</strong>
          <div className="flex items-center">
            <input
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}

              type="text"
              placeholder="Type Github Username"
              className="border-white px-2 py-1 border focus:border-blue-400 rounded-md w-full color-black color-text_white focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-transperent hover:bg-gray-700 ml-2 px-4 py-1 border rounded-md text-white"
            >
              Search
            </button>
          </div>
          {userData && ( 
            <div className="flex items-center lg:ml-2">
              <img
                src={userData.avatar_url} 
                alt="User Avatar"
                className="rounded-full w-8 h-8"
              />
              <div className="lg:block hidden ml-2">
                <div className="font-semibold text-white">{userData.name}</div> {/* Display user's name */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
