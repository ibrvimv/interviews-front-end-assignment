import React from 'react';

type PropTypes = {
  level: string;
  isSelected: boolean;
  onClick: () => void;
}

const LevelButton: React.FC<PropTypes> = ({ level, isSelected, onClick }) => {
  return (
    <div onClick={onClick}
      // className='flex justify-center items-center py-3 px-2 rounded-xl flex-auto text-xs uppercase  bg-white text-black hover:text-green hover:shadow-2xl hover:shadow-green transition-all duration-50 cursor-pointer'
      className={`flex justify-center items-center py-3 px-2 rounded-xl flex-auto text-xs uppercase bg-white
        ${isSelected ? 'text-green outline-2 outline outline-green ' : ' text-black'}
        hover:text-green hover:shadow-2xl hover:shadow-green transition-all duration-50 cursor-pointer`}
    >
      {level}
    </div>
  );
};

export default LevelButton;
