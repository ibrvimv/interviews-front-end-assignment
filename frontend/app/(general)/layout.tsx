import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

import { Montserrat } from 'next/font/google';
import LenisScroll from '@/components/LenisScroll';
import clsx from 'clsx';

const ibm_plex_mono = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={clsx(ibm_plex_mono.className, 'flex flex-col justify-between min-h-screen')} >
      <div>
        <Header />
        <main className='mt-40 px-8'>{children}</main>
      </div>
      <Footer />
      <LenisScroll />
    </main>
  );
}
