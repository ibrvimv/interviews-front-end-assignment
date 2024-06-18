'use client';

import config from '../../lib/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className=' items-center sm:text-left h-24 px-5'>
      <nav className='flex flex-row md:gap-4 items-center h-full'>
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
    </header>
  );
}
