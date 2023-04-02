const CategoryFilter = ({ setCurrentCategory }) => {
  const CATEGORIES = [
    { name: 'technology', color: '#3b82f6' },
    { name: 'science', color: '#16a34a' },
    { name: 'finance', color: '#ef4444' },
    { name: 'society', color: '#eab308' },
    { name: 'entertainment', color: '#db2777' },
    { name: 'health', color: '#14b8a6' },
    { name: 'history', color: '#f97316' },
    { name: 'news', color: '#8b5cf6' },
  ];

  return (
    <div>
      <ul className='flex sm:flex-col sm:gap-4 gap-2'>
        <li>
          <button
            className='btn-gradient w-full font-coiny leading-none uppercase sm:text-base text-sm sm:px-4 sm:pt-4 sm:pb-[13px] p-3 pb-[9px] rounded-full transition-all duration-300 sm:hover:scale-110 hover:-rotate-2 hover:scale-105 mb-4'
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>

        {CATEGORIES.map((item) => (
          <li key={item.name}>
            <button
              className='w-full font-coiny leading-none uppercase sm:text-base text-sm sm:px-4 sm:pt-4 sm:pb-[13px] p-3 pb-[9px] rounded-full transition-all duration-300 sm:hover:scale-110 hover:-rotate-2 hover:scale-105'
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
