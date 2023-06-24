import React from "react";
import banner from "../../../assets/images/home-banner.jpg";

const HERO_SECTION = () => {
  return (
    <section
      className="bg-no-repeat bg-pink1 max-h-max bg-center my-0 pt-20 sm:mt-0 font-roboto"
      style={{
        backgroundImage: `url(${banner})`,
      }}>
      <div className="container pt-20 pb-80 px-2 sm:pt-32 flex flex-col gap-5 justify-start items-center">
        <span className="text-blue font-semibold text-lg text-center">BEST ONLINE EDUCATION SERVICE IN THE WORLD</span>
        <h1 className="text-blue font-bold text-5xl text-center">ONE STEP AHEAD THIS SEASON</h1>
        <div className="flex flex-col sm:flex-row gap-5 mt-3 sm:mt-8">
          <button className="bg-blue text-xs hover:bg-transparent text-yellow font-semibold hover:text-blue py-4 px-9 border hover:border-blue rounded transform duration-700">
            LEARN MORE
          </button>
          <button className="bg-yellow text-xs hover:bg-transparent text-blue font-semibold hover:text-yellow py-4 px-9 border hover:border-yellow rounded transform duration-700">
            SEE COURSE
          </button>
        </div>
      </div>
    </section>
  );
};

export default HERO_SECTION;
