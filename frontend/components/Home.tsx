'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RecipeItems } from '@/types/types';
import RecipeCard from './RecipeCard';
import FilterModal from './FilterModal';
import { getRecipeItems } from '@/app/api/api';


// used this component separate from main home page because:
// I did not wanted to ruin SEO by making home page client component.
// So I am loading initial data of 5 items on server side, then load others in this component.
// Here I used react-intersection-observer to fetch new portion of data only when you scroll and reach the bottom side of the page.

const Home = ({ initialData }: { initialData: RecipeItems }) => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && !loading) {
      loadMoreData();
    }
  }, [inView]);

  const loadMoreData = async () => {
    setLoading(true);
    try {
      const newData = await getRecipeItems(page)
      setData((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex  gap-5'>
        <div className='max-w-lg w-full relative'>
          <FilterModal />
        </div>
        <div className='w-full'>
          <ul className='flex flex-col gap-5'>
            {data.map((item, index) => (
              <li key={index}>
                <RecipeCard item={item} />
              </li>
            ))}
          </ul>
          {loading && (
            <div className='flex items-center justify-center h-52'>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};

export default Home;
