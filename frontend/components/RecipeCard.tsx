import React from 'react';
import { RecipeItem } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './Loading';
import { selectDiets, selectDifficulties } from '@/lib/features/recipeSlice';
import { useSelector } from 'react-redux';

// mapper
function mapIdToName(id: string, mapper: { id: string, name: string }[]) {
  const item = mapper.find(item => item.id === id);
  return item ? item.name : "Unknown";
};

const RecipeCard: React.FC<{ item: RecipeItem }> = React.memo(({ item }) => {
  const diets = useSelector(selectDiets);
  const difficulties = useSelector(selectDifficulties);
  const dietName = mapIdToName(item.dietId, diets);
  const difficultyName = mapIdToName(item.difficultyId, difficulties);

  if (!item) {
    return <Loading />;
  }

  return (
    <Link href={`/recipes/${item.id}`}>
      <div className='flex items-center gap-5 bg-white hover:shadow-2xl hover:shadow-green transition-all duration-50 rounded-xl'>
        <div className='relative max-w-60 w-full aspect-square rounded-l-xl overflow-hidden'>
          <Image
            src={`http://localhost:8080${item.image}`}
            fill
            alt={item.name}
            className='object-cover'
          />
        </div>
        <div className='px-5 flex flex-col gap-2'>
          <h2 className='font-bold text-xl'>{item.name}</h2>
          <p>{item.instructions}</p>
          <div className='flex gap-5'>
            <div className='flex gap-5'>
              <p className='text-xs font-thin'>diet: {dietName}</p>
              <p className='text-xs font-thin'>difficulty: {difficultyName}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

RecipeCard.displayName = 'RecipeCard';

export default RecipeCard;
