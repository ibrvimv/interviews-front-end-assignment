'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RecipeItem } from '@/types/types';
import RecipeCard from './RecipeCard';
import Image from 'next/image';
import FilterCategory from './FilterCategory';
import Search from './Search';
import LevelButton from './LevelButton';
import FilterSelect from './FilterSelect';

type HomeProps = {
  initialData: RecipeItem[];
};

const plans = ['Easy', 'Medium', 'Hard'];

// used this component separate from main home page because:
// I did not wanted to ruin SEO by making home page client component.
// So I am loading initial data of 5 items on server side, then load others in this component.
// Here I used react-intersection-observer to fetch new portion of data only when you scroll and reach the bottom side of the page.

const Home: React.FC<HomeProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(1);
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
    const res = await fetch(
      `http://localhost:8080/recipes?_page=${page + 1}&_limit=5`
    );
    const newData = await res.json();
    setData((prevData) => [...prevData, ...newData]);
    setPage(page + 1);
    setLoading(false);
  };

  const cuisines = [
    'Italian',
    'American',
    'Mexican',
    'Indian',
    'Japanese',
    'Spanish',
    'French',
    'Greek',
    'Thai',
    'British',
    'Russian',
    'Middle Eastern',
    'North African',
    'Korean',
  ];
  const diets = [
    'Vegetarian',
    'Mediterranean',
    'Non-Vegetarian',
    'Pescatarian',
  ];
  const difficulty = ['Easy', 'Medium', 'Hard'];

  return (
    <>
      <div className='flex px-5 gap-5'>
        <div className='max-w-lg w-full'>
          <h2 className='text-xl font-bold mb-10'>RecipeBook</h2>
          <form action='' className='flex flex-col gap-7'>
            <Search />
            <FilterSelect title='Select difficulty' data={difficulty} />
            <FilterSelect title='Select Diet' data={diets} />
            <FilterSelect title='Select Cuisines' data={cuisines} />
          </form>
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
