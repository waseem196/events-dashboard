'use client';

import { useState } from 'react';

const SearchField = ({ searchQueryHandler }) => {
  const [searchUser, setSearchUser] = useState('');

  const searchHandler = () => {
    searchQueryHandler(searchUser);
    setSearchUser('');
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <div className="flex border-2 border-gray-200 rounded outline-none focus:border-0">
        <input
          type="text"
          className="px-4 py-2 w-44 md:w-80 outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
          placeholder="Search i.e 'Taylor Swift'"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <button
          className="px-4 text-white bg-gray-600 hover:bg-gray-700 border text-sm md:text-base"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchField;
