import React from "react";
import HERO_SECTION from "./Hero/Hero";
import CLIENTS_OPINION from "./ClientOpinion/Opinions";
import UPCOMING_EVENTS from "./ComingEvents/Events";
import Courses from "./Courses/Courses";
import AWESOME_FEATURES from "./Features/Features";
import Timer from "./Timer/Timer";
import EXPERT_TRAINERS from "./Trainers/Trainers";

const Home = () => {
  return (
    <main>
      <HERO_SECTION />
      <AWESOME_FEATURES color={"white"}/>
      <Courses />
      <Timer />
      <EXPERT_TRAINERS />
      <UPCOMING_EVENTS />
      <CLIENTS_OPINION />
    </main>
  );
};

export default Home;
