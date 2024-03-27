import { Header } from "../components/header";
import { Nav_bar } from "../components/navBar";
import { Newslet } from "../components/newsLett";
import { Shop_by_category } from "../components/shoppingCategory";
import { Testimony } from "../components/testimony";
import { Top_products } from "../components/topProducts";
import { Trending_products } from "../components/trendingProducts";

const Home_page = () => {
  return (
    <>
      <Nav_bar />
      <Header />
      <div className='font-[Helvetica]'>
        <Shop_by_category />
        <div className='font-bold text-2xl my-3 p-3 w-screen border-0 border-b-2'>
          Top Products
        </div>
        <Top_products />
        <div className='font-bold text-2xl mt-6 p-3 w-screen border-0 border-b-2'>
          Trending Products
        </div>
        <Trending_products />
      </div>
      <Newslet />
      <Testimony />
      <div className='font-bold text-2xl mt-6 p-3 w-screen border-0 border-b-2'>
        Topselling Collection
      </div>
      <Trending_products />
    </>
  );
};

export default Home_page;
