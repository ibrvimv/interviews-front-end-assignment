import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

import { Montserrat } from 'next/font/google';

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
    <main className={ibm_plex_mono.className}>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </main>
  );
}
