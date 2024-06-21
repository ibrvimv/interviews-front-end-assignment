import { Cuisines, Diets, Difficulties } from '@/types/types';
import Button from './Button';
import FilterSelect from './FilterSelect';
import Search from './Search';
import { getCuisines, getDiets, getDifficulies } from '@/app/api/api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCuisines, selectDiets, selectDifficulties, setCuisines, setDiets, setDifficulties, resetFilter, resetSearch } from '@/lib/features/recipeSlice';

type PropTypes = {
  handleSearch: () => void
  searchTerm: string;
  setSearchTerm: (newValue: string) => void;
  handleFilter: (filterCriteria: { diets: string[], cuisines: string[], difficulties: string[] }) => void;
}

export default function Filter({ handleSearch, searchTerm, setSearchTerm, handleFilter }: PropTypes) {
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  const dispatch = useDispatch();
  const diets = useSelector(selectDiets);
  const cuisines = useSelector(selectCuisines);
  const difficulties = useSelector(selectDifficulties);


  useEffect(() => {
    const fetchData = async () => {
      const cuisinesData: Cuisines = await getCuisines();
      const dietsData: Diets = await getDiets();
      const difficultiesData: Difficulties = await getDifficulies();
      cuisinesData && dispatch(setCuisines(cuisinesData))
      dietsData && dispatch(setDiets(dietsData))
      difficultiesData && dispatch(setDifficulties(difficultiesData))
    };

    fetchData();
  }, [dispatch]);

  const handleSelect = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(id => id !== value) : [...prev, value]);
  };

  const applyFilter = () => {
    handleFilter({
      diets: selectedDiets,
      cuisines: selectedCuisines,
      difficulties: selectedDifficulties
    });
  };
  const handleResetFilter = () => {
    setSelectedDiets([]);
    setSelectedCuisines([]);
    setSelectedDifficulties([]);
    setSearchTerm('');
    dispatch(resetSearch());
    dispatch(resetFilter());
  }

  return (
    <div className='fixed top-40 left-8 z-40 block'>
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white mb-2'>
        <Search handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white'>
        {difficulties && <FilterSelect title='Select difficulty' data={difficulties} selected={selectedDifficulties}
          onSelect={(value) => handleSelect(setSelectedDifficulties, value)} />}
        {diets && <FilterSelect title='Select Diet' data={diets} selected={selectedDiets}
          onSelect={(value) => handleSelect(setSelectedDiets, value)} />}
        {cuisines && <FilterSelect title='Select Cuisines' data={cuisines} selected={selectedCuisines}
          onSelect={(value) => handleSelect(setSelectedCuisines, value)} />}
        <div className='flex justify-end gap-2'>
          <Button text='Reset' alt='filter reset' icon={undefined} value='' onClick={handleResetFilter} />
          <Button text='Apply' alt='filter apply' icon={undefined} value='' onClick={applyFilter} />
        </div>
      </div>
    </div>
  );
}

