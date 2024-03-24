import logo from "../assets/logo.png";
import cartIcone from "../assets/cart-large-2-svgrepo-com.svg";
import { Menu } from "./menu";
import { Search_bar } from "./serchBar";

export const Nav_bar = () => {
  return (
    <div className='bg-[#020140] flex flex-row items-center z-20 sticky  top-0  p-2 justify-between w-screen'>
      <Menu />
      <div className='w-1/5'>
        <img src={logo} />
      </div>

      <div className='hidden md:block md:w-3/5'>
        <Search_bar />
      </div>

      <div className='md:flex md:flex-row md:text-white w:2/5 hidden md:block md:space-x-3'>
        <div>Free Shipping</div>
        <div>Need Help ?</div>
      </div>

      <div>
        <img src={cartIcone} className='md:hidden' />
      </div>
    </div>
  );
};
