import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  // Random component
  const Completionist = () => <span>Yeeah! Free courses are available!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const arr = [
      {
        text: "Days",
        time: days,
      },
      {
        text: "Hours",
        time: hours,
      },
      {
        text: "Mins",
        time: minutes,
      },
      {
        text: "Secs",
        time: seconds,
      },
    ];

    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max font-roboto">
          {arr.map(({ text, time }, key) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row sm:gap-1 items-center sm:pt-5 justify-center w-14 sm:w-20 h-14 md:w-36 md:h-28 rounded-md border border-gray bg-[#334f6c]">
              <span className="countdown font-bold text-xl md:text-4xl sm:mb-5">{time}</span>
              {text}
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <section className="bg-blue sm:py-20 sm:my-20 py-10 mb-10 flex justify-center items-center">
      <div className="container w-11/12 flex flex-col justify-center xl:flex-row md:justify-around">
        <div className="text-white w-full text-center xl:text-start xl:w-2/5 flex justify-center flex-col">
          <h2 className="text-4xl font-rubik">Register Now</h2>
          <p className="mt-5 mb-10 xl:mb-20">
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station.
          </p>
          <Countdown date={"2023-11-20T01:02:03"} renderer={renderer} />
        </div>
        <form className="p-10 xl:ml-40 mt-5 xl:mt-0 bg-white flex flex-col justify-center items-center gap-4">
          <h3 className="text-2xl font-rubik">Courses for Free</h3>
          <span className="text-gray relative bottom-4">
            It's high time for learning
          </span>
          <input
            type="text"
            className="w-full border-b border-gray opacity-70 focus:outline-none placeholder:text-sm placeholder:font-semibold"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="w-full border-b border-gray opacity-70 focus:outline-none placeholder:text-sm placeholder:font-semibold"
            placeholder="Your Phone Number"
          />
          <input
            type="text"
            className="w-full border-b border-gray opacity-70 focus:outline-none placeholder:text-sm placeholder:font-semibold"
            placeholder="Your Email Address"
          />
          <button
            type={`submit`}
            className="mt-3 text-sm font-bold bg-yellow hover:bg-blue text-blue hover:text-yellow py-4 px-28 transform duration-300">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Timer;
