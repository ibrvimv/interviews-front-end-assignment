'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-between  sm:text-left h-24 px-5'>
      <nav className='flex flex-row md:gap-4 items-center h-full'>
        {/* Logo */}
        <Link href={{ pathname: '/' }} prefetch={false}>
          <div className='relative w-14 h-14'>
            <Image
              src='/logo.png'
              alt='logo'
              fill
              className=' object-contain'
            />
          </div>
        </Link>
        {/* main nav */}
        {config.nav.map((item, index) => (
          <Link
            className={`text-base px-3 py-2 hover:text-secondary  transition-colors duration-100 ${
              pathname === item.path ? 'text-secondary' : ''
            }`}
            key={index}
            href={{ pathname: item.path }}
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* search and favourite navs */}
      <div className='flex gap-5'>
        <div className='flex justify-center items-center w-12 aspect-square bg-khaki rounded-full'>
          <div className='relative w-8 h-8'>
            <Image
              src='/search.svg'
              alt='search'
              fill
              className='object-cover'
            />
          </div>
        </div>
        <div className='flex justify-center items-center w-12 aspect-square bg-pink rounded-full'>
          <div className='relative w-6 aspect-square '>
            <Image
              src='/heart.svg'
              alt='search'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
