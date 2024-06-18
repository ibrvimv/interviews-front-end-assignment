'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RecipeItem } from '@/types/types';
import RecipeCard from './RecipeCard';
import Image from 'next/image';

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
      <div className='flex px-5 gap-5'>
        <div className='max-w-lg w-full'>
          <h2 className='text-xl font-bold mb-10'>RecipeBook</h2>
          <form action='' className='flex flex-col gap-7'>
            <div id='search' className='relative'>
              <label className='block px-3 text-sm text-black  mb-3 relative max-w-md w-full '>
                Search by Name
              </label>
              <input
                className='max-w-md w-full py-4 px-3 rounded-xl text-black  focus:outline-none'
                id='searchByName'
                type='text'
                placeholder='Enter recipe name'
              />
            </div>
            <div id='filter'>
              <div className='block px-3 text-sm text-black  mb-3  max-w-md w-full '>
                Select category
              </div>
              <div className='flex gap-5'>
                <div className='relative w-16 aspect-square '>
                  <Image
                    src='/spicy.svg'
                    alt='spicy'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative w-16 aspect-square '>
                  <Image
                    src='/vegan.svg'
                    alt='vegan'
                    fill
                    className='object-cover'
                  />
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
                  <Image
                    src='/top.svg'
                    alt='top rated'
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
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
