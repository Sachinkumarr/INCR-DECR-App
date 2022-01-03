import React, { useState, useEffect } from "react";

const Incrdecr = () => {
  const [myNum, setmyNum] = useState(0);

  useEffect(() => {
    document.title = `Counts(${myNum})`;
  });

  return (
    <>
      <div className="px-8 py-10 mt-[6rem] mx-auto max-w-xl  bg-gray-400 shadow-lg shadow-black rounded-lg">
        <p
          className="px-[14rem] mb-20 bg-black font-bold text-[7rem] text-red-500 hover:text-white
         rounded-3xl shadow-lg shadow-white/70"
        >
          {myNum}
        </p>
        <div className="px-40 ">
          <span
            className="p-4 mr-8 font-medium bg-black text-white hover:text-black hover:bg-red-400 shadow-lg shadow-zinc-100/80
         hover:shadow-black/80 rounded-full"
          >
            <button onClick={() => setmyNum(myNum + 1)}>INCR</button>
          </span>

          <span
            className="p-4 ml-5  bg-black text-white hover:text-black hover:bg-red-400 shadow-lg shadow-zinc-100/80 
           hover:shadow-black/80 rounded-full"
          >
            <button
              onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}
            >
              DECR
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Incrdecr;
