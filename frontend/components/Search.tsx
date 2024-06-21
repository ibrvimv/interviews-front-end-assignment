import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from './Button';

type PropTypes = {
  handleSearch: () => void
  searchTerm: string;
  setSearchTerm: (newValue: string) => void;
}

const Search: React.FC<PropTypes> = ({ searchTerm, setSearchTerm, handleSearch }) => {

  return (
    <div id='search' className='relative'>
      <label className='block px-3 text-sm text-black  mb-3 relative max-w-md w-full '>
        Search by Name
      </label>
      <div className='flex items-center gap-2'>
        <input
          className='max-w-md w-full flex-1 flex-grow px-3 h-14 rounded-xl text-black  focus:outline-green focus:outline-2'
          id='searchByName'
          type='text'
          placeholder='Enter recipe name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button icon={SearchIcon} text='' value='' alt='' onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
