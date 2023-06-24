import React from "react";
import Heading from "../../../utils/Heading";
import { FEATURES } from "./data";

const AWESOME_FEATURES = ({color}) => {
  return (
    <section className={`py-10 sm:py-20 bg-${color}`}>
      <Heading text="Awesome Feature" color={color === "blue" ? "white" : "blue"}/>
      <ul className="flex md:flex-row flex-col justify-center items-center gap-10 mt-10">
        {FEATURES.map(({ id, image, title }) => (
          <li
            className="sm:p-10 p-5 sm:w-96 w-72 bg-pink2 flex flex-col gap-3 transform duration-700 hover:shadow-2xl"
            key={id}>
            <div className="text-5xl">{image}</div>
            <h4 className="text-blue font-semibold text-xl">{title}</h4>
            <p className="text-gray">
              One make creepeth, man bearing theira firmament won't great heaven
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AWESOME_FEATURES;
