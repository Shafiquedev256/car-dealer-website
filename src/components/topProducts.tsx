import { useTopProducts } from "../hooks/topPtoduct";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Top_products = () => {
  const { topProducts } = useTopProducts();
  return (
    <>
      <div className=''>
        <div className='hidden md:block'>
          <Slide slidesToScroll={1} slidesToShow={5} indicators={false}>
            {topProducts.map((item) => (
              <div
                className=' w-[150px] md:w-[250px] relative  flex flex-col items-center'
                key={item.url}
              >
                <img
                  src={item.url}
                  className='w-[100%] border-0 border-r-[1px]'
                />
                <span className='bg-red-600 w-fit rounded text-white text-xs p-1 absolute top-0 right-0  z-20 m-2  '>
                  New
                </span>
                <div className='w-[100%] flex flex-col text-gray-500 py-3'>
                  <span className='font-bold  text-sm text-gray-700'>
                    {item.caption}
                  </span>
                  <span className='font-bold  text-[#030158]'>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className='md:hidden w-screen'>
          <div className='grid grid-cols-2 gap-3 p-4 ml-3 w-[100%]'>
            {topProducts.map((item, index: number) => (
              <div
                key={index}
                className=' w-[70%]  relative md:w-[250px] justify-center my-2 flex flex-col items-center'
              >
                <img src={item.url} className='w-[100%]' />
                <span className='bg-red-600 w-fit rounded text-white text-xs p-1 absolute top-0 right-0  z-10   '>
                  New
                </span>
                <div className='w-[100%] flex flex-col  text-gray-500 '>
                  <span className='font-bold text-xs text-gray-700'>
                    {item.caption}
                  </span>
                  <span className='font-bold text-[#030158] text-sm'>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
