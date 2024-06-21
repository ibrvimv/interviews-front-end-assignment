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


// used this component separate from main home page because:
// I did not wanted to ruin SEO by making home page client component.
// So I am loading initial data of 5 items on server side, then load others in this component.
// Here I used react-intersection-observer to fetch new portion of data only when you scroll and reach the bottom side of the page.

const Home = ({ initialData }: { initialData: RecipeItems }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectRecipes);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    dispatch(setRecipes(initialData));
  }, [initialData, dispatch]);

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
      console.log('done')
    }
  };

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
