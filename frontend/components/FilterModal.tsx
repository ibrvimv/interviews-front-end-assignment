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


const FilterModal: React.FC = ({

}) => {
  return (
    <div
      className={`fixed top-36 left-8  z-40 rounded-xl  ${'block'
        }`}
    >
      <div className='flex p-6 flex-col gap-7 relative'>
        <Search />
        <FilterSelect title='Select difficulty' data={difficulty} />
        <FilterSelect title='Select Diet' data={diets} />
        <FilterSelect title='Select Cuisines' data={cuisines} />
      </div>
    </div>
  );
};

export default FilterModal;
