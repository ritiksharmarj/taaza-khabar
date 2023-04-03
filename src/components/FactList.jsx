import FactCard from './cards/FactCard';

const FactList = ({ facts }) => {
  // If there is no fact
  if (facts.length === 0)
    return (
      <p className='text-center uppercase sm:text-3xl text-xl font-semibold mt-6'>
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  // If there are facts in the database
  return (
    <div>
      <ul>
        {facts.map((fact) => (
          <FactCard key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>There are {facts.length} facts in the Taaza Khabar. Add your own!</p>
    </div>
  );
};

export default FactList;
