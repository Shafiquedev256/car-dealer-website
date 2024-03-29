import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const logos = [
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-7-140x63.png",
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-4-140x63.png",
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-5-140x63.png",
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-2-140x63.png",
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-6-140x63.png",
  "https://themetechmount.net/opencart/autovio-layout2/image/cache/catalog/manufacturer/logo-3-140x63.png",
];
export const Trust_Usfooter = () => {
  return (
    <>
      <div className='hidden md:block bg-gray-200 p-2 '>
        <Slide
          slidesToScroll={1}
          slidesToShow={5}
          arrows={false}
          indicators={true}
          cssClass=' p-4 bg-gray-200  '
        >
          {logos.map((item) => (
            <div key={item} className='w-[200px] h-[200x]'>
              <img src={item} />
            </div>
          ))}
        </Slide>
      </div>
      <div className='md:hidden block bg-gray-200 p-2 '>
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          arrows={false}
          indicators={true}
          cssClass=' p-4 bg-gray-200  '
        >
          {logos.map((item) => (
            <div key={item} className='w-[200px] h-[200x]'>
              <img src={item} />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};
