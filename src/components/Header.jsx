import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='mx-auto max-w-[1440px] w-full xl:px-8'>
      <div className='flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8 xl:px-0'>
        <Link to='/'>
          <img src={logo} alt='taaza-khabar' className='sm:h-12 h-10' />
        </Link>

        <button className='btn-gradient font-coiny leading-none uppercase text-lg sm:px-8 sm:pt-5 sm:pb-[17px] p-3 pt-[9px] rounded-full transition-all sm:hover:scale-110 hover:-rotate-2 hover:scale-105'>
          Share a fact
        </button>
      </div>
    </header>
  );
};

export default Header;
