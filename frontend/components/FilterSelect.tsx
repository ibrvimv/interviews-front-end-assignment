import React from 'react';
import LevelButton from './LevelButton';
import { FilterData } from '@/types/types';


const FilterSelect = ({ data, title }: { data: Array<FilterData>, title: string }) => {
  if (!data) return null;
  else {
    return (
      <div>
        <label className='block px-3 text-sm text-black  mb-3 relative max-w-md w-full '>
          {title}
        </label>
        <div className='flex gap-2 max-w-md flex-wrap'>
          {data.map((item) => {
            return <LevelButton level={item.name} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default FilterSelect;
