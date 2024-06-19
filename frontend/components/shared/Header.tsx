'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '../Button';
import AddIcon from '@mui/icons-material/Add';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-between  sm:text-left h-28 px-8 fixed top-0 right-0 left-0 z-50'>
      <nav className='flex flex-row md:gap-4 items-end h-full'>
        {/* Logo */}

        <Link
          href={{ pathname: '/' }}
          prefetch={false}
          className='flex flex-col items-center'
        >
          <div className='relative w-14 h-14'>
            <Image
              src='/logo.png'
              alt='logo'
              fill
              className=' object-contain'
            />
          </div>
          <div className='text-xl font-bold'>RecipeBook</div>
        </Link>

        {/* main nav */}
        {config.nav.map((item, index) => (
          <Link
            className={`text-base px-3  hover:text-green transition-all duration-200   ${
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
        <Button
          icon={AddIcon}
          alt='add new Item'
          text='Add New Recipe'
          value='add'
        />

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
