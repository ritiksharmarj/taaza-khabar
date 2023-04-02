import { useEffect, useState } from 'react';
// import supabase from './supabase';

import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';
import Loader from './components/Loader';
import NewFactForm from './components/NewFactForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  // Fetch facts data from the supabase
  useEffect(() => {
    const getFacts = async () => {
      // const { data: facts, error } = await supabase.from('facts').select('*');
    };
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      <main className='mx-auto max-w-[1440px] overflow-hidden'>
        <div className='px-4 sm:px-6 lg:px-8 sm:h-screen h-auto pt-28 pb-10'>
          {/* New Fact Form */}
          {showForm ? <NewFactForm setShowForm={setShowForm} /> : null}

          <div className='grid sm:grid-cols-[250px_minmax(0,_1fr)] grid-cols-1 sm:gap-12 gap-6'>
            <CategoryFilter setCurrentCategory={setCurrentCategory} />

            {isLoading ? <Loader /> : <FactList />}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
