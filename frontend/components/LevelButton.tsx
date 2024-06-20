import React from 'react';

const LevelButton = ({ level }: { level: string }) => {
  return (
    <div className='flex justify-center items-center py-3 px-2 rounded-xl flex-auto bg-white text-black hover:text-green hover:shadow-2xl hover:shadow-green transition-all duration-50 cursor-pointer '>
      {level}
    </div>
  );
};

export default LevelButton;
