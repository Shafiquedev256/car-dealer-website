export const Column_menu = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-2 '>
      <div className=' text-white object-center bg-cover rounded  bg-[url("/src/assets/lamp.jpg")] m-2 md:m-0'>
        <div className='flex flex-col justify-evenly p-5 space-y-2 bg-black bg-opacity-25 h-[100%] '>
          <h1 className='text-2xl font-bold'>Lamps & Light</h1>
          <div className=' font-lighter text-2xl'>Mega Sale</div>
          <div className='font-bold text-sm'>
            Sale Up To{" "}
            <span className='text-[#ffce00] font-bold text-sm'>45% </span>Off
          </div>
          <button className='bg-[#ffce00] text-sm text-white font-bold w-fit p-2 rounded hover:bg-black'>
            Shop Now
          </button>
        </div>
      </div>
      <div className=' text-white object-center bg-cover rounded  bg-[url("/src/assets/banner_img2.jpg")] m-2 md:m-0'>
        <div className='flex flex-col justify-evenly p-5 space-y-2 bg-black bg-opacity-25 h-[100%] '>
          <div className=' text-[#ffce00] font-bold text-sm'>
            New Arrivals <span className=''>2024</span>
          </div>
          <div className=' font-lighter text-2xl'>Ford Fiesta</div>
          <div className=' font-lighter text-2xl'>Make Driving Fun Again!</div>

          <button className='bg-[#ffce00] text-sm text-white font-bold w-fit p-2 rounded hover:bg-black'>
            Shop Now
          </button>
        </div>
      </div>
      <div className=' object-center bg-cover rounded  bg-[url("/src/assets/banner_img3.jpg")] m-2 md:m-0'>
        <div className='flex flex-col justify-evenly p-5 space-y-2 items-center w-[70%] md:w-[50%]  h-[100%] text-center '>
          <div className=' text-[gray] font-bold text-sm'>Amazing Value</div>
          <div className=' font-bold '>Premium Quality</div>
          <div className=' font-bold '>
            Combo Collection <span className=''>2024</span>
          </div>

          <button className='bg-[#ffce00] text-sm text-white font-bold w-fit p-2 rounded hover:bg-black'>
            Shop Now
          </button>
        </div>
      </div>
      <div className=' text-white object-center bg-cover rounded  bg-[url("/src/assets/banner_img4.jpg")] m-2 md:m-0'>
        <div className='flex flex-col justify-evenly p-5 space-y-2 bg-black items-end  bg-opacity-25 h-[100%] '>
          <div className='w-[70%]  md:w-[50%] text-center'>
            From{" "}
            <span className='font-bold text-[#ffce00] text-2xl'>$9999</span>
          </div>
          <div className=' bold text-2xl w-[100%] md:w-[60%] text-center'>
            BMW Series Available
          </div>
          <div className='  w-[100%] md:w-[50%] text-center  '>
            Popular Car Available
          </div>
          <div className=' w-[100%] md:w-[30%] flex justify-center md:justify-between items-center'>
            <button className='bg-[#ffce00] text-sm text-white font-bold w-fit p-2 rounded hover:bg-black'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
