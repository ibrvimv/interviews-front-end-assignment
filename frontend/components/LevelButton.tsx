import React from 'react';

type Level = {
  level: string;
};
const LevelButton: React.FC<Level> = ({ level }) => {
  return (
    <div className='uppercase flex justify-center items-center py-4 px-2 rounded-xl flex-auto bg-white text-gray-400 hover:text-black transition-all duration-200 cursor-pointer '>
      {level}
    </div>
  );
};

export default LevelButton;
