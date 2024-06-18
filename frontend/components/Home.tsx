// components/Home.js

'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RecipeItem } from '@/types/types';
import RecipeCard from './RecipeCard';

type HomeProps = {
  initialData: RecipeItem[];
};

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

  return (
    <>
      <div className='flex px-5'>
        <div className='max-w-lg w-full'></div>
        <div>
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
