import Head from "next/head";
import NavigationBar from "../nav/NavigationBar";
import Footer from "../footer/Footer";

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | QHUYNH` : "QHUYNH"}</title>
      </Head>
      <main className="h-screen grid grid-rows-main bg-white text-darker dark:bg-darker dark:text-white">
        <header className="bg-blue-200">
          <NavigationBar />
        </header>
        <div className="flex flex-col flex-wrap text-center gap-2 content-center overflow-y-auto overflow-x-hidden text-ellipsis p-24">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
