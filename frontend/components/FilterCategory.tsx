import React from 'react';
import Image from 'next/image';

const FilterCategory = () => {
  return (
    <div id='filter'>
      <div className='block px-3 text-sm text-black  mb-3  max-w-md w-full '>
        Select category
      </div>
      <div className='flex gap-5'>
        <div className='relative w-16 aspect-square '>
          <Image src='/spicy.svg' alt='spicy' fill className='object-cover' />
        </div>
        <div className='relative w-16 aspect-square '>
          <Image src='/vegan.svg' alt='vegan' fill className='object-cover' />
        </div>
        <div className='relative w-16 aspect-square '>
          <Image
            src='/gluten-free.svg'
            alt='gluten free'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative w-16 aspect-square '>
          <Image src='/top.svg' alt='top rated' fill className='object-cover' />
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
