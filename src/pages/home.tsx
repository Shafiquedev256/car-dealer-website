import { Header } from "../components/header";
import { Nav_bar } from "../components/navBar";
import { Shop_by_category } from "../components/shoppingCategory";

const Home_page = () => {
  return (
    <div className='font-[Helvetica]'>
      <Nav_bar />
      <Header />
      <Shop_by_category />
    </div>
  );
};

export default Home_page;
