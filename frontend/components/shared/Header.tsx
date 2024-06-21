'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '../Button';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openModal } from '@/lib/features/recipeSlice';

export default function Header() {
  const dispatch = useDispatch()
  const pathname = usePathname();

  const handleAddNewRecipe = () => {
    dispatch(openModal())
  }
  return (
    <header className='flex items-center justify-between  sm:text-left h-28 px-8 fixed top-0 right-0 left-0 z-30'>
      <nav className='flex flex-row md:gap-4 items-end h-full'>
        {/* Logo */}

        <Link
          href={{ pathname: '/' }}
          prefetch={false}
          className='flex flex-col items-center  '
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
            className={`text-base px-3  hover:text-green transition-all duration-50   ${pathname === item.path ? 'text-secondary' : ''
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
          onClick={handleAddNewRecipe}
        />

        <div className='flex justify-center items-center w-[60px] aspect-square bg-pink rounded-full hover:bg-back border-2 border-pink transition-all duration-50'>
          <div className='relative w-6 aspect-square hover:w-8 transition-all duration-100'>
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
