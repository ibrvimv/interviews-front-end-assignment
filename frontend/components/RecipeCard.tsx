import React from 'react';
import { RecipeItem } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({ item }: { item: RecipeItem }) => {
  if (!item) {
    return <p>Loading...</p>;
  } else
    return (
      <Link href={`/recipes/${item.id}`}>
        <div className='flex items-center gap-5 bg-white hover:shadow-2xl hover:shadow-green transition-all duration-50 rounded-xl'>
          <div className='relative max-w-60 w-full aspect-square rounded-l-xl overflow-hidden'>
            <Image
              src={`http://localhost:8080${item?.image}`}
              fill
              alt={item.name}
              className='object-cover'
            />
          </div>
          <div className='px-5 flex flex-col gap-2'>
            <h2 className='font-bold text-xl '>{item.name}</h2>
            <p>{item.instructions}</p>
            <div className='flex gap-5'>
              {/* <div>
                {item.ingredients.map((ingredient, index) => {
                  return (
                    <p className='text-xs font-thin' key={index}>
                      {ingredient}
                    </p>
                  );
                })}
              </div> */}
              <div className='flex gap-5'>
                <p className='text-xs font-thin'>diet: {item.dietId}</p>
                <p className='text-xs font-thin'>difficulty: {item.difficultyId}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default RecipeCard;
