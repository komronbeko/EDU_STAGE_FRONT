import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import course from "../../../assets/images/course.jpg";
import Heading from "../../../utils/Heading";

export default function Courses() {
  const data = [
    {
      id: 1,
      imgSrc: course,
      text: "Computer Engineering",
    },
    {
      id: 2,
      imgSrc: course,
      text: "Custom Product Design",
    },
    {
      id: 3,
      imgSrc: course,
      text: "Social Media Network",
    },
  ];

  const responsiveOptions = {
    0: {
      items: 1,
    },
    726: {
      items: 2,
    },
    1025: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  };

  const options = {
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    loop: true,
    dots: false,
    responsive: { ...responsiveOptions },
  };

  const windowSize = window.innerWidth;

  const message = data.map((el) => (
    <div key={el.id} className="w-96 px-8 group flex justify-center flex-row">
      <div className="bg-pink2 transform duration-300 group-hover:bg-white group-hover:shadow-xl overflow-hidden pb-5">
        <div className="w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110">
          <img src={el.imgSrc} alt={el.text} />
        </div>
        <div className="pl-5 pt-5 flex flex-col gap-3 justify-start items-start">
          <div className="flex flex-row">
            <button className="bg-blue h-8 text-white py-1 px-3 text-sm">
              DESIGN
            </button>
            <div className="rounded-full hidden relative left-36 bottom-12 w-16 h-16 bg-yellow group-hover:bg-blue sm:flex items-center justify-center">
              <span className="text-blue transform duration-500 group-hover:text-yellow font-bold text-xl">
                &#36;25
              </span>
            </div>
          </div>
          <h1 className="transform duration-500 group-hover:text-yellow text-blue text-xl font-bold">
            {el.text}
          </h1>
          <p className="text-gray font-thin">
            Lorem ipsum dolor amet consectetur, adipisicing elit. Natus minima
            veritatis quod debitis.
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="container bg-white py-5 sm:py-10">
      <Heading text="Our Popular Courses" color={"blue"}/>
      {windowSize > 1200 ? (
        <div className="xl:mx-28 mx-5 mt-5 flex justify-center items-center overflow-hidden">
          <OwlCarousel {...options}>{message}</OwlCarousel>
        </div>
      ) : (
        <div className="flex justify-center gap-y-5 items-center flex-wrap flex-row">{message}</div>
      )}
    </section>
  );
}
