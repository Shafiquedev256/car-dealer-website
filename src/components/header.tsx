import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "../assets/main-banner-01-1920x666.png";
import banner2 from "../assets/main-banner-02-1920x666.png";
import { Search_bar } from "./serchBar";

const slideImages = [
  {
    url: banner1,
    caption: "Slide 1",
  },
  {
    url: banner2,
    caption: "Slide 2 ",
  },
];

export const Header = () => {
  return (
    <div className='slide-container'>
      <div className='p-2  bg-[#030158]'>
        <div className='md:hidden  '>
          <Search_bar />
        </div>
        <div className='hidden md:block md:flex md:flex-row md:py-3 font-bold text-sm justify-evenly text-white'>
          <div>Our products</div>
          <div>Accessories</div>
          <div> About us</div>
          <div> Contact us</div>
          <div>Sunroof</div>
          <div>Latest Blogs</div>
        </div>
      </div>

      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className='h-[15rem] md:h-[30rem]'>
            <div
              className='bg-center bg-cover flex item-center justify-center h-[100%]'
              style={{ backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
