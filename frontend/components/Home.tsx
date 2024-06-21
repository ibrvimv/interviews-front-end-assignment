'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import RecipeCard from './RecipeCard';
import Filter from './Filter';
import { getRecipeItems } from '@/app/api/api';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { appendRecipes, resetSearch, selectIsSearching, selectRecipes, selectSearchResults, setRecipes, setSearchResults } from '@/lib/features/recipeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectRecipes);
  const searchResults = useSelector(selectSearchResults);
  const isSearching = useSelector(selectIsSearching);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && !loading && !isSearching) {
      loadMoreData();
    }
  }, [inView]);

  const loadMoreData = async () => {
    setLoading(true);
    const newData = await getRecipeItems(page);
    if (newData) {
      dispatch(appendRecipes(newData));
      setPage(page + 1);
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    if (searchTerm) {
      const searchData = await getRecipeItems(1, searchTerm);
      dispatch(setSearchResults(searchData));
    } else {
      dispatch(resetSearch());
    }
    setLoading(false);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      dispatch(resetSearch());
    }
  };

  const displayedData = isSearching ? searchResults : data;


  console.log(displayedData)

  if (!displayedData) return <Loading />
  return (
    <>
      <div className='flex  gap-5'>
        <div className='max-w-lg w-full relative'>
          <Filter handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
        </div>
        <div className='w-full'>
          <ul className='flex flex-col gap-5'>
            {displayedData.map((item, index) => (
              <li key={index}>
                <RecipeCard item={item} />
              </li>
            ))
            }
          </ul>
          {loading && <Loading />}
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};

export default Home;
