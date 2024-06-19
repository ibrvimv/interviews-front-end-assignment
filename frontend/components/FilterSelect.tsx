import React from 'react';
import LevelButton from './LevelButton';

type PropsTypes = {
  title: string;
  data: Array<string>;
};
const FilterSelect: React.FC<PropsTypes> = ({ data, title }) => {
  if (!data) return null;
  else {
    return (
      <div>
        <label className='block px-3 text-sm text-black  mb-3 relative max-w-md w-full '>
          {title}
        </label>
        <div className='flex gap-2 max-w-md flex-wrap'>
          {data.map((item, key) => {
            return <LevelButton level={item} key={key} />;
          })}
        </div>
      </div>
    );
  }
};

export default FilterSelect;
