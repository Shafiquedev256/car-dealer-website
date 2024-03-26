import { useProducts } from "../../hooks/products";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Row_menu = () => {
  const { products } = useProducts();
  return (
    <>
      <div className='font-bold text-2xl border-0 border-b-2 my-3 px-2 py-4 w-[95%] ml-3'>
        Shop By Category
      </div>
      <div className='hidden md:block'>
        <Slide slidesToScroll={1} slidesToShow={7} arrows={false}>
          {products.map((slideImage, index) => (
            <div
              key={index}
              className='h-[175px]  flex flex-col item-center mx-3  '
            >
              <div className='w-[120px]  mx-2'>
                <img src={slideImage.url} className='h-[120px] md:w-[100%]' />
                <div className='text-black opacity-[60%] font-bold text-center'>
                  {slideImage.caption}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className='block md:hidden'>
        <Slide slidesToScroll={1} slidesToShow={3} arrows={false}>
          {products.map((slideImage, index) => (
            <div
              key={index}
              className='h-[175px]  flex flex-col item-center mx-3  '
            >
              <div className='w-[120px]  mx-2'>
                <img src={slideImage.url} className='h-[120px] md:w-[100%]' />
                <div className='text-black opacity-[60%] font-bold text-center'>
                  {slideImage.caption}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};
