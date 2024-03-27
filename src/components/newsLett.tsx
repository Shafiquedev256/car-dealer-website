export const Newslet = () => {
  return (
    <div className='w-screen h-[15rem] md:h-[32rem] bg-no-repeat bg-cover object   bg-[url("https://themetechmount.net/opencart/autovio-layout2/image/catalog/banners/banner_img2.jpg")]'>
      <div className='flex flex-col items-center justify-center space-y-4 p-4 bg-blue-800 bg-opacity-40 w-[100%] h-[100%]'>
        <div className='font-bold text-2xl text-white text-center'>
          Subscribe Our Newsletter!
        </div>
        <div className='text-white text-center w-[90%] md:w-[40%]'>
          Be the first to receive exclusive promotions, updates and product
          announcements. Subscribe to our mailing list now!
        </div>
        <div className='md:w-[50%] w-[95%] bg-white rounded  flex flex-row justify-between'>
          <input
            type='text'
            placeholder='Your email address'
            className='rounded-l md:w-4/5 w-3/5 outline-none p-1 md:p-3'
          />
          <button className='text-center text-white bg-[#ffce00] w-fit p-1 md:p-2 font-bold text-xs md:text-sm rounded-r'>
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
