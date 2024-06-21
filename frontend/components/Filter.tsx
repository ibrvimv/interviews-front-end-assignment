import { Cuisines, Diets, Difficulties } from '@/types/types';
import Button from './Button';
import FilterSelect from './FilterSelect';
import Search from './Search';
import { getCuisines, getDiets, getDifficulies } from '@/app/api/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCuisines, selectDiets, selectDifficulties, setCuisines, setDiets, setDifficulties, } from '@/lib/features/recipeSlice';

type PropTypes = {
  handleSearch: () => void
  searchTerm: string;
  setSearchTerm: (newValue: string) => void;
}

export default function Filter({ handleSearch, searchTerm, setSearchTerm }: PropTypes) {

  const dispatch = useDispatch();
  const diets = useSelector(selectDiets);
  const cuisines = useSelector(selectCuisines);
  const difficulties = useSelector(selectDifficulties);


  useEffect(() => {
    const fetchData = async () => {
      const cuisinesData: Cuisines = await getCuisines();
      const dietsData: Diets = await getDiets();
      const difficultiesData: Difficulties = await getDifficulies();
      dispatch(setCuisines(cuisinesData))
      dispatch(setDiets(dietsData))
      dispatch(setDifficulties(difficultiesData))
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    console.log('Apply')
  }
  return (
    <div className='fixed top-40 left-8 z-40 block'>
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white mb-2'>
        <Search handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white'>
        {difficulties && <FilterSelect title='Select difficulty' data={difficulties} />}
        {diets && <FilterSelect title='Select Diet' data={diets} />}
        {cuisines && <FilterSelect title='Select Cuisines' data={cuisines} />}
        <div className='flex justify-end'>
          <Button text='Apply' alt='filter apply' icon={undefined} value='' onClick={handleFilter} />
        </div>
      </div>
    </div>
  );
}

