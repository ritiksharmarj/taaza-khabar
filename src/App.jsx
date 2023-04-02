import { useEffect, useState } from 'react';
// import supabase from './supabase';

import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';
import Loader from './components/Loader';

const App = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch facts data from the supabase
  useEffect(() => {
    const getFacts = async () => {
      // const { data: facts, error } = await supabase.from('facts').select('*');
    };
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header />

      <main className='mx-auto max-w-[1440px] overflow-hidden'>
        <div className='grid sm:grid-cols-[250px_minmax(0,_1fr)] grid-cols-1 sm:gap-12 gap-6 px-4 sm:px-6 lg:px-8 sm:h-screen h-auto pt-28 pb-10'>
          <CategoryFilter setCurrentCategory={setCurrentCategory} />

          {isLoading ? <Loader /> : <FactList />}
        </div>
      </main>
    </>
  );
};

export default App;
