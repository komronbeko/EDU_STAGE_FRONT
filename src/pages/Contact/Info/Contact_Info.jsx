import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import http from "../../../service/api";
import { API_BASE_URL } from "../../../constants/api";

const CONTACT_INFO = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {name, email, subject, message} = e.target.elements;

    await http.post(`${API_BASE_URL}/contact`, {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    });

    e.target.reset();
  }
  return (
    <section className="relative flex items-top mb-10 justify-center bg-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 text-blue bg-gray-100 sm:rounded-lg font-rubik">
              <h1 className="text-4xl sm:text-5xl font-roboto text-gray-800 font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal font-roboto text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <FaLocationArrow />
                <div className="ml-4 tracking-wide font-semibold w-40">
                  California, USA
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <FaPhoneAlt />
                <div className="ml-4 tracking-wide font-semibold w-40">
                  00 (440) 9865
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <FaEnvelope />
                <div className="ml-4 tracking-wide font-semibold w-40">
                  info@acme.org
                </div>
              </div>
            </div>

            <form onSubmit={(e)=>handleSubmit(e)} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="subject" className="hidden">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message..."
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 font-roboto bg-yellow hover:bg-blue hover:text-yellow text-blue font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CONTACT_INFO;
