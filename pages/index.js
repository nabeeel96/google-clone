import Head from 'next/head';
import Avatar from '../components/Avatar';
import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google clone</title>
        <link rel='icon' href='/Google-favicon.png' />
      </Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left side */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right side */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Image
            className={
              'ml-auto h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
            }
            src='/pic1.jpg'
            width={45}
            height={40}
            alt='Profile pic'
          />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        {/* <Glogo gurl='/google-logo.png' /> */}
        <Image
          src='/google-logo.png'
          alt='Google-logo'
          width={300}
          height={100}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500 cursor-pointer' />
          <input
            ref={searchInputRef}
            type='text'
            className=' flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5 cursor-pointer' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I am feeling lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
