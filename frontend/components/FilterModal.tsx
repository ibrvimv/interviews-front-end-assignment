import Button from './Button';
import FilterSelect from './FilterSelect';
import Search from './Search';
import CloseIcon from '@mui/icons-material/Close';

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
const diets = ['Vegetarian', 'Mediterranean', 'Non-Vegetarian', 'Pescatarian'];
const difficulty = ['Easy', 'Medium', 'Hard'];


const FilterModal = () => {
  return (
    <div
      className='fixed top-40 left-8  z-40 block '
    >
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white mb-2'>
        <Search />
      </div>
      <div className='flex p-6 flex-col gap-7 rounded-xl border-4 border-white'>
        <FilterSelect title='Select difficulty' data={difficulty} />
        <FilterSelect title='Select Diet' data={diets} />
        <FilterSelect title='Select Cuisines' data={cuisines} />
        <div className='flex justify-end'>
          <Button text='Apply' alt='filter apply' icon={undefined} value='' />
        </div>
      </div>
    </div >
  );
};

export default FilterModal;
