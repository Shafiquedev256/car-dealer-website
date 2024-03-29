export const Footer = () => {
  return (
    <>
      <div className='bg-[url("https://usa-forum.d5cdn.com/uploads/default/optimized/2X/4/485f8a984228f98cc9243fa38f7fbc5e0a039dd0_2_500x500.jpeg")] h-fit  w-screen bg-cover bg-no-repeat object-center'>
        <div className='w-[100%] h-[100%] bg-blue-950 bg-opacity-80  flex flex-col md:flex-row  md:justify-evenly py-4'>
          <div className='text-white'>
            <h1 className='font-bold  text-2xl'>Information</h1>
            <div className=''>About Us</div>
            <div className=''>Delivery Information</div>
            <div className=''>Privacy Policy</div>
            <div className=''>Terms & Conditions</div>
            <div className=''>Contact Us</div>
          </div>

          <div className='text-white'>
            <h1 className=' text-2xl'>Customer Services</h1>
            <div className=''>Brands</div>
            <div className=''>Gift Certificates</div>
            <div className=''>Affiliate</div>
            <div className=''>Specials</div>
            <div className=''>My Account</div>
          </div>

          <div className='text-white'>
            <h1 className=' text-2xl'>Contact Us</h1>
            <div className=''>
              <span>Address:</span>
              71 Pennington Lane Vernon Rockville, CT 06066
            </div>
            <div className=''>
              <span>Phone:</span>
              +123-456-7890
            </div>
            <div className=''>
              <span>Fax:</span>
              +456-123-7890
            </div>
            <div className=''>
              <span>Email:</span>
              info@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
