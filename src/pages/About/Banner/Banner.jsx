import React from "react";
import banner from "../../../assets/images/about-banner.jpg";

const Banner = ({text, breadcrumb}) => {
  return (
    <section
      className="bg-no-repeat max-h-max bg-center my-0 pt-16 sm:mt-0 font-rubik"
      style={{
        backgroundImage: `url(${banner})`,
      }}>
      <div className="bg-blue text-white opacity-70 w-full pb-56 flex justify-center items-center">
        <div className="pt-20 text-center flex justify-center items-center gap-3 flex-col">
          <h1 className="text-5xl">{text}</h1>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
