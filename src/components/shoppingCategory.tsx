import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Deckled from "../assets/pic1.jpg";
import sparkingimg from "../assets/sparking.jpg";
import bumperimg from "../assets/bumper.jpg";

const slideImages = [
  {
    url: Deckled,
    caption: "Deckled",
  },
  {
    url: bumperimg,
    caption: "Bumper",
  },
  {
    url: sparkingimg,
    caption: "Sparking Cable",
  },
  {
    url: sparkingimg,
    caption: "Sparking Cable",
  },
  {
    url: sparkingimg,
    caption: "Sparking Cable",
  },
  {
    url: sparkingimg,
    caption: "Sparking Cable",
  },
];

export const Shop_by_category = () => {
  return (
    <div className='slide-container  py-3'>
      <Slide cssClass=''>
        {slideImages.map((slideImage, index) => (
          <div
            key={index}
            className='h-[150px] w-[20%] md:w-[10%] md:h-[200px]'
          >
            <div className='w-[100%] h-[100%] mx-2'>
              <img src={slideImage.url} className='h-[70%] md:w-[100%]' />
              <div className='text-black opacity-[60%] font-bold text-center'>
                {slideImage.caption}
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
