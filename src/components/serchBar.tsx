import { useState } from "react";

export const Search_bar = () => {
  const [input, setInput] = useState("");
  return (
    <div className=' w-[90%] md:w-[50%] flex flex-row w:screen justify-between  items-center rounded'>
      <input
        type='text'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        placeholder='Search here...'
        className='w-[100%] rounded-l  p-2 outline-0 ml-3'
      />
      <button className='bg-[#ffce00] text-white p-2 font-bold hover:bg-black   text-center w-fit rounded-r'>
        Search
      </button>
    </div>
  );
};
