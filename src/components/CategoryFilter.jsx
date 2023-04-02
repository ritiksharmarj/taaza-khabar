import { CATEGORIES } from '../utils/config';

const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <div>
      <ul className='flex sm:flex-col sm:gap-4 gap-2'>
        <li>
          <button
            className='btn-gradient w-full font-coiny leading-none uppercase sm:text-base text-sm sm:px-4 sm:pt-4 sm:pb-[13px] px-3 pt-2 pb-3 rounded-full transition-all duration-300 sm:hover:scale-110 hover:-rotate-2 hover:scale-105 mb-4'
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((item) => (
          <li key={item.name}>
            <button
              className='w-full font-coiny leading-none uppercase sm:text-base text-sm sm:px-4 sm:pt-4 sm:pb-[13px] px-3 pt-2 pb-3 rounded-full transition-all duration-300 sm:hover:scale-110 hover:-rotate-2 hover:scale-105'
              style={{ backgroundColor: item.color }}
              onClick={() => setCurrentCategory(item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
