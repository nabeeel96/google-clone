import { SearchIcon, XIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header({ gurl }) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <img
          loading='lazy'
          src={gurl}
          alt='Google logo'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex px-6 py-3 ml-10 mr-5  border border-gray-200 rounded-full shadow-lg max-w-3xl  items-center flex-grow'>
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow w-full focus:outline-none '
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6  text-blue-500 hidden sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar url='/pic1.jpg' className='ml-auto' />

        {/* HeaderOptions */}
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;