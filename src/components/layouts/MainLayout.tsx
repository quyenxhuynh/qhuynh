import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "QHUYNH"}</title>
      </Head>
      <main className="min-h-screen flex flex-col w-full content-center flex-wrap text-center justify-center items-center bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
