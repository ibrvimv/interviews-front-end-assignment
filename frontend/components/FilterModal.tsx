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

type PropsType = {
  openFilterModal: boolean;
  toggleFilterModal: () => void;
};
const FilterModal: React.FC<PropsType> = ({
  openFilterModal,
  toggleFilterModal,
}) => {
  return (
    <div
      className={`fixed top-36 left-8 bg-pink z-40 rounded-xl  ${
        openFilterModal ? 'block' : 'hidden'
      }`}
    >
      <div className='flex p-6 flex-col gap-7 relative'>
        <div
          onClick={toggleFilterModal}
          className='py-2 px-3 cursor-pointer absolute z-40 top-3 right-3'
        >
          <CloseIcon />
        </div>
        <Search />
        <FilterSelect title='Select difficulty' data={difficulty} />
        <FilterSelect title='Select Diet' data={diets} />
        <FilterSelect title='Select Cuisines' data={cuisines} />
      </div>
    </div>
  );
};

export default FilterModal;
