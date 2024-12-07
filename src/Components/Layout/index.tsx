import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Header />
      <main className='container-full bg-secondary my-3 px-2 py-5'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
