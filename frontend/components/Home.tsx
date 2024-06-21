'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Filter from './Filter';
import { getRecipeItems } from '@/app/api/api';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { appendRecipes, resetFilter, resetSearch, selectFilterResults, selectIsFiltering, selectIsSearching, selectRecipes, selectSearchResults, setFilterResults, setSearchResults } from '@/lib/features/recipeSlice';
import ListItems from './ListItems';
import { FilterCriteria } from '@/types/types';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectRecipes);
  const searchResults = useSelector(selectSearchResults);
  const isSearching = useSelector(selectIsSearching);
  const filterResults = useSelector(selectFilterResults);
  const isFiltering = useSelector(selectIsFiltering);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  //intersection observer
  const { ref, inView } = useInView({
    threshold: 1,
  });

  // each time inView changes it trigger loadMoreData()
  useEffect(() => {
    if (inView && !loading && !isSearching) {
      loadMoreData();
    }
  }, [inView]);

  //this method fetches 5 items and append new data to previous
  const loadMoreData = async () => {
    setLoading(true);
    const newData = await getRecipeItems(page);
    if (newData) {
      dispatch(appendRecipes(newData));
      setPage(page + 1);
    }
    setLoading(false);
  };

  //search methods
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

  //filter methods

  const handleFilter = async (filterCriteria: FilterCriteria) => {
    setLoading(true);
    if (filterCriteria) {
      const filterData = await getRecipeItems(1, '', filterCriteria);
      dispatch(setFilterResults(filterData));
    } else {
      dispatch(resetFilter())
    }
    setLoading(false);
  };

  // chose which data to show: filtered, search or all. 
  // unfortinately i did not have time to mix search and filter to work together

  // const displayedData = isSearching ? searchResults : data;
  const displayedData = isSearching ? searchResults : (isFiltering ? filterResults : data);


  if (!displayedData) return <Loading />
  return (
    <>
      <div className='flex  gap-5'>
        <div className='max-w-lg w-full relative'>
          <Filter handleFilter={handleFilter} handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
        </div>
        <ListItems displayedData={displayedData} loading={loading} />
      </div>
      <div ref={ref} />
    </>
  );
};

export default Home;
