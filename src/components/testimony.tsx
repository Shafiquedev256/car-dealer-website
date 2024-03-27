export const Testimony = () => {
  return (
    <div className='bg-gray-300 py-3'>
      <div className='w-sceen flex flex-col  space-y-2 justify-center items-center py-4'>
        <div className='font-bold text-2xl '>What Our Customers Say!</div>
        <div className=' text-gray-700 w-[90%] md:w-[40%] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className=' w-screen py-4 bg-gray-300 flex flex-row-reverse space-x-3 md:space-x-5 overflow-scroll justify-evenly items-center'>
        <div className='bg-white w-fit h-fit p-3 rounded-[3px] flex flex-col justify-between'>
          <div className='w-fit flex flex-row items-center space-x-2'>
            <img
              src='https://themetechmount.net/opencart/autovio-layout2/image/catalog/banners/avtar2.jpg'
              className='w-20 rounded-full h-20'
            />
            <div className='font-bold text-sm '>Jane Ritchell</div>
          </div>
          <div className='md:w-[300px] w-[250px] text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            voluptatem atque maiores ad aliquam in quia ex cupiditate sed iste
            dicta.
          </div>
        </div>
        <div className='bg-white w-fit h-fit p-3 rounded-[3px] flex flex-col justify-between'>
          <div className='w-fit flex flex-row items-center space-x-2'>
            <img
              src='https://themetechmount.net/opencart/autovio-layout2/image/catalog/banners/avtar3.jpg'
              className='w-20 rounded-full h-20'
            />
            <div className='font-bold text-sm '>Alex Ritchell</div>
          </div>
          <div className='md:w-[300px] w-[250px] text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            voluptatem atque maiores ad aliquam in quia ex cupiditate sed iste
            dicta.
          </div>
        </div>
        <div className='bg-white w-fit h-fit p-3 rounded-[3px] flex flex-col justify-between'>
          <div className='w-fit flex flex-row items-center space-x-2'>
            <img
              src='https://themetechmount.net/opencart/autovio-layout2/image/catalog/banners/avtar1.jpg'
              className='w-20 rounded-full h-20'
            />
            <div className='font-bold text-sm '>Alex Ritchell</div>
          </div>
          <div className='md:w-[300px] w-[250px] text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            voluptatem atque maiores ad aliquam in quia ex cupiditate sed iste
            dicta.
          </div>
        </div>
      </div>
    </div>
  );
};
