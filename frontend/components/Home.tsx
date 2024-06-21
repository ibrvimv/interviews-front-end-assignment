'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RecipeItems } from '@/types/types';
import RecipeCard from './RecipeCard';
import Filter from './Filter';
import { getRecipeItems } from '@/app/api/api';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes, setRecipes } from '@/lib/features/recipeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectRecipes);
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
    const newData = await getRecipeItems(page)

    if (newData) {
      dispatch(setRecipes([...data, ...newData]));
      setPage(page + 1);
      setLoading(false);
    }
  };

  if (!data) return <Loading />
  return (
    <>
      <div className='flex  gap-5'>
        <div className='max-w-lg w-full relative'>
          <Filter />
        </div>
        <div className='w-full'>
          <ul className='flex flex-col gap-5'>
            {data && data.map((item, index) => (
              <li key={index}>
                <RecipeCard item={item} />
              </li>
            ))}
          </ul>
          {loading && <Loading />}
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};

export default Home;
