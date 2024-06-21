import React from 'react';
import LevelButton from './LevelButton';
import { FilterData } from '@/types/types';

type FilterSelectProps = {
  data: Array<FilterData>;
  title: string;
  selected: string[];
  onSelect: (value: string) => void;
};

const FilterSelect: React.FC<FilterSelectProps> = ({ data, title, selected, onSelect }) => {
  if (!data) return null;
  else {
    return (
      <div>
        <label className='block px-3 text-sm font-medium text-black  mb-3 relative max-w-md w-full '>
          {title}
        </label>
        <div className='flex gap-2 max-w-md flex-wrap'>
          {data.map((item) => {
            return <LevelButton isSelected={selected.includes(item.id)} onClick={() => onSelect(item.id)} level={item.name} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default FilterSelect;
