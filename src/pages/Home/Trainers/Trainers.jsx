import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../../../utils/Heading";
import http from "../../../service/api";
import { API_BASE_URL } from "../../../constants/api";

const EXPERT_TRAINERS = () => {
  const [trainers, setTrainers] = useState([])

  const fetchTrainers = async () => {
    try {
      const { data } = await http.get(`${API_BASE_URL}/trainers`).then();
      setTrainers(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchTrainers();
  },[]);

  return (
    <section className={`sm:pt-10 pt-5 sm:pb-10 pb-5 bg-white`}>
      <div className="container">
        <Heading text="Our Expert Trainers" color={"blue"}/>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10">
          {trainers.map(({ id, name, image, job, quote, facebook_link, twitter_link, linkedin_link, pinterest_link }) => (
            <div
              key={id}
              className="w-64 pb-5 flex flex-col justify-center items-center gap-3 shadow-lg">
              <img className="w-full" src={`${API_BASE_URL}/uploads/${image}`} alt="trainer" />
              <div className="flex flex-col items-center font-rubik">
                <h5 className="font-bold text-blue text-xl">{name}</h5>
                <span className="text-gray font-thin">{job}</span>
              </div>
              <div className="text-center px-5 text-gray">
                <p>{quote}</p>
              </div>
              <div className="flex flex-row text-lg gap-5 mt-3 items-center text-gray">
                <Link
                  to={pinterest_link}
                  className="hover:opacity-100 opacity-70"
                  target={`_blank`}>
                  <FaInstagram className="hover:pt-[1px]" />
                </Link>
                <Link
                  to={facebook_link}
                  className="hover:opacity-100 opacity-70"
                  target={`_blank`}>
                  <FaFacebook className="hover:pt-[1px]" />
                </Link>
                <Link
                  to={twitter_link}
                  className="hover:opacity-100 opacity-70"
                  target={`_blank`}>
                  <FaTwitter className="hover:pt-[1px]" />
                </Link>
                <Link
                  to={linkedin_link}
                  className="hover:opacity-100 opacity-70"
                  target={`_blank`}>
                  <FaLinkedin className="hover:pt-[1px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EXPERT_TRAINERS;
