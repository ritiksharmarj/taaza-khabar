import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';

const App = () => {
  return (
    <>
      <Header />

      <main className='mx-auto max-w-[1440px]'>
        <div className='flex px-4 sm:px-6 lg:px-8 h-screen pt-24'>
          <CategoryFilter />
          <FactList />
        </div>
      </main>
    </>
  );
};

export default App;
