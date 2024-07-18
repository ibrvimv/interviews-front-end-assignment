'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Filter from './Filter';
import { getRecipeItems } from '@/app/api/api';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { appendRecipes, resetFilter, resetSearch, selectFilterResults, selectIsFiltering, selectIsSearching, selectRecipes, selectSearchResults, setFilterResults, setSearchResults } from '@/lib/features/recipeSlice';
import ListItems from './ListItems';
import { FilterCriteria } from '@/types/types';
import gsap from 'gsap';

const Home = () => {
  const listRef = useRef<HTMLDivElement>(null);

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


  //this method fetches 5 items and append new data to previous
  const loadMoreData = useCallback(async () => {
    setLoading(true);
    try {
      const newData = await getRecipeItems(page);
      if (newData) {
        dispatch(appendRecipes(newData));
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Failed to load more data:', error);
    } finally {
      setLoading(false);
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (inView && !loading && !isSearching) {
      loadMoreData();
    }
  }, [inView]);

  //search methods

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      if (searchTerm) {
        const searchData = await getRecipeItems(1, searchTerm);
        dispatch(setSearchResults(searchData));
      } else {
        dispatch(resetSearch());
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, dispatch]);

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
    if (!term) {
      dispatch(resetSearch());
    }
  }, [dispatch]);

  //filter methods

  const handleFilter = useCallback(async (filterCriteria: FilterCriteria) => {
    setLoading(true);
    try {
      if (filterCriteria) {
        const filterData = await getRecipeItems(1, '', filterCriteria);
        dispatch(setFilterResults(filterData));
      } else {
        dispatch(resetFilter());
      }
    } catch (error) {
      console.error('Filter failed:', error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  //animation gsap 

  useEffect(() => {
    // loadMoreData()
    const list = listRef.current;
    if (list) {
      gsap.to(list, {
        opacity: 1,
        y: 0,
        duration: 2
      });
    }
  }, []);

  // chose which data to show: filtered, search or all. 
  // unfortinately i did not have time to mix search and filter to work together
  // const displayedData = isSearching ? searchResults : data;

  const displayedData = isSearching ? searchResults : (isFiltering ? filterResults : data);


  if (!displayedData) return <Loading />
  return (
    <>
      <div className='flex gap-5' >
        <div className='max-w-lg w-full relative'>
          <Filter handleFilter={handleFilter} handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
        </div>
        <div ref={listRef} className='w-full opacity-0 translate-y-10'>
          <ListItems displayedData={displayedData} loading={loading} />
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};

export default Home;
