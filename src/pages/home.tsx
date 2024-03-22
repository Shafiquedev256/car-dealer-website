import { Header } from "../components/header";
import { Nav_bar } from "../components/navBar";
import { Shop_by_category } from "../components/shoppingCategory";

const Home_page = () => {
  return (
    <>
      <Nav_bar />
      <Header />
      <Shop_by_category />
    </>
  );
};

export default Home_page;
