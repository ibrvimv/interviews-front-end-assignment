import React from 'react';

const Search = () => {
  return (
    <div id='search' className='relative'>
      <label className='block px-3 text-sm text-black  mb-3 relative max-w-md w-full '>
        Search by Name
      </label>
      <input
        className='max-w-md w-full flex-1 flex-grow py-4 px-3 rounded-xl text-black  focus:outline-none'
        id='searchByName'
        type='text'
        placeholder='Enter recipe name'
      />
    </div>
  );
};

export default Search;
