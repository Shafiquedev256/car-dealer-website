import { useProducts } from "../../hooks/products";

export const Row_menu = () => {
  const { products } = useProducts();
  return (
    <>
      <div className='font-bold text-2xl border-0 border-b-2 my-3 px-2 py-4 w-[95%] ml-3'>
        Shop By Category
      </div>
      <div className='overflow-hidden px-2'>
        <div className='slide-container flex flex-row fit overflow-scroll py-3'>
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
        </div>
      </div>
    </>
  );
};
