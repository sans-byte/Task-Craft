import React from "react";
import banner from "@public/images/banner.jpg";
import Image from "next/image";

function Home(){
  return (
    <>
      <main className="w-full">
        <section className="sm:h-[28rem] w-full overflow-clip bg-bottom relative z-0">
          <Image src={banner} alt="sky" className="min-w-full min-h-full object-cover" />
          <div className="sm:bg-slate-600/10 sm:backdrop-blur-sm lg:w-3/6 sm:w-3/4 absolute text-6xl top-2/4 font-family-bebas sm:left-[6%]">
            <p className="text-white z-1 container mx-auto">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-700 font-bold">
                Notes & Tasks,
              </span>
              <br />
              <span className="text-bold text-slate-300">All in One Place</span>
            </p>
          </div>
        </section>
        <section className="w-full h-[26rem] bg-blue-400">
          Show case taking notes
        </section>
        <section className="w-full h-[26rem] bg-red-400">
          Show case making todos
        </section>
      </main>
    </>
  );
};

export default Home;
