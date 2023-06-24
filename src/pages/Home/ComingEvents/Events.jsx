import React, { useEffect, useState } from "react";
import Heading from "../../../utils/Heading";
import { FaArrowRight, FaClock, FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import http from "../../../service/api";
import { API_BASE_URL } from "../../../constants/api";

const UPCOMING_EVENTS = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    try {
      const { data } = await http.get(`${API_BASE_URL}/events`).then();
      setEvents(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchEvents();
  },[]);
  return (
    <section className={`py-20 sm:py-28 my-10 sm:my-20  bg-blue`}>
      <Heading text="Upcoming Events" color={"white"} />
      <h1>Hello</h1>
      <div className="container flex justify-center flex-col sm:flex-row gap-10">
        {events.map(({ id, title, description, image, date, time_from, time_to, location }) => (
          <div
            key={id}
            className="flex justify-end bg-no-repeat bg-cover w-full md:w-1/2 lg:w-1/3 h-96"
            style={{ backgroundImage: `url(${API_BASE_URL}/uploads/${image})` }}>
            <div className="bg-blue opacity-70 w-60 h-64 font-rubik">
              <div className="flex flex-row justify-center items-center gap-3 mt-5">
                <div className="flex flex-col items-center w-16 border-r-2 border-white">
                  <span className="text-yellow text-3xl font-bold">{date.split(" ")[0]}</span>
                  <span className="text-white">{date.split(" ")[1]}</span>
                </div>
                <div className="text-white font-thin text-sm flex flex-col items-start gap-1">
                  <span className="flex flex-row items-center gap-1">
                    <FaClock /> {time_from + " - " + time_to}
                  </span>
                  <span className="flex flex-row gap-1 items-center">
                    <FaLocationArrow /> {location}
                  </span>
                </div>
              </div>
              <p className="text-white text-[15px] text-start font-thin ml-7 mt-3">{description}</p>
              <button className="ml-7 mt-3 text-sm font-bold bg-yellow hover:bg-blue hover:brightness-200 text-blue hover:text-yellow py-4 px-10 transform duration-300">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link className="text-yellow flex flex-row gap-2 items-center justify-center mt-10">
        VIEW ALL EVENTS <FaArrowRight />
      </Link>
    </section>
  );
};

export default UPCOMING_EVENTS;
