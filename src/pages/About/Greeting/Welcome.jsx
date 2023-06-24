import React from "react";
import { FaArrowRight } from "react-icons/fa";
import girls from "../../../assets/images/about.png";

const Greeting = () => {
  return (
    <section className="container flex flex-col lg:flex-row justify-center items-center py-10 sm:py-20">
      <div className="relative lg:left-16 lg:top-3">
        <img src={girls} alt="girls" />
      </div>
      <div className="lg:w-1/2 w-full border-8 border-pink2 rounded p-5 sm:p-20">
        <h2 className="font-bold text-blue text-3xl font-rubik">
          Welcome to our Institute
        </h2>
        <div className="w-4/5">
          <p className="text-gray mt-3">
            Subdue whales void god which living don't midst lesser yielding over
            lights whose. Cattle greater brought sixth fly den dry good tree
            isn't seed stars were.
          </p>
          <p className="text-gray mt-5">
            Subdue whales void god which living don't midst lesser yieldi over
            lights whose. Cattle greater brought sixth fly den dry good tree
            isn't seed stars were the boring.
          </p>
        </div>
        <button className="flex flex-row gap-1 items-center mt-7 text-sm font-bold font-rubik rounded-md bg-yellow hover:bg-blue text-blue hover:text-yellow py-4 px-16 transform duration-300">
          LEARN MORE <FaArrowRight className="opacity-70" />
        </button>
      </div>
    </section>
  );
};

export default Greeting;
