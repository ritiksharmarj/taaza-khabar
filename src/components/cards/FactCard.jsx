import { CATEGORIES } from '../../utils/config';

const FactCard = ({ fact }) => {
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  return (
    <li className='flex flex-col xl:flex-row items-start xl:items-center gap-3 xl:gap-6 text-lg leading-6 bg-stone-700 mb-4 px-6 py-4 -tracking-[1px] rounded-2xl'>
      <p>
        {isDisputed ? (
          <span className='font-semibold mr-3 text-red-500'>
            [⛔️ DISPUTED]
          </span>
        ) : null}
        {fact.text}
        <a
          href={fact.source}
          target='_blank'
          className='text-stone-400 ml-3 transition-all duration-300 hover:text-blue-500 active:text-blue-500'
        >
          (Source)
        </a>
      </p>

      {/* Category */}
      <span
        className='uppercase sm:text-sm text-xs font-coiny leading-none px-[10px] pt-1 pb-2 sm:pt-[3px] sm:pb-0 rounded-full'
        style={{
          backgroundColor: CATEGORIES.find(
            (item) => item.name === fact.category
          ).color,
        }}
      >
        {fact.category}
      </span>

      {/* Vote buttons */}
      <div className='ml-auto shrink-0 sm:flex grid grid-cols-3 w-full sm:w-auto gap-2 mt-3 sm:mt-0'>
        <button className='bg-stone-500 text-base px-3 py-[6px] rounded-full font-semibold transition-all duration-300 hover:bg-stone-800 disabled:bg-stone-700'>
          👍 {fact.votesInteresting}
        </button>
        <button className='bg-stone-500 text-base px-3 py-[6px] rounded-full font-semibold transition-all duration-300 hover:bg-stone-800 disabled:bg-stone-700'>
          🤯 {fact.votesMindblowing}
        </button>
        <button className='bg-stone-500 text-base px-3 py-[6px] rounded-full font-semibold transition-all duration-300 hover:bg-stone-800 disabled:bg-stone-700'>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default FactCard;
