import React from 'react';
import { RecipeItem } from '@/types/types';
import Image from 'next/image';

type Props = {
  item: RecipeItem;
};

const RecipeCard: React.FC<Props> = ({ item }) => {
  if (!item) {
    return <p>Loading...</p>;
  } else
    return (
      <div className='flex gap-5 '>
        <div className='relative w-60 aspect-square rounded-lg overflow-hidden'>
          <Image
            src={`http://localhost:8080${item?.image}`}
            fill
            alt={item.name}
            className='object-cover'
          />
        </div>
        <div className='p-5 flex flex-col gap-2'>
          <h2 className='font-bold text-xl '>{item.name}</h2>
          <p>{item.instructions}</p>
          <div>
            {item.ingredients.map((ingredient, index) => {
              return (
                <p className='text-xs font-thin' key={index}>
                  {ingredient}
                </p>
              );
            })}
          </div>
          <p className='text-xs font-thin'>diet: {item.dietId}</p>
          <p className='text-xs font-thin'>difficulty: {item.difficultyId}</p>
        </div>
      </div>
    );
};

export default RecipeCard;
