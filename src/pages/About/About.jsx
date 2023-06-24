import React from "react";
import CLIENTS_OPINION from "../Home/ClientOpinion/Opinions";
import AWESOME_FEATURES from "../Home/Features/Features";
import Banner from "./Banner/Banner";
import Greeting from "./Greeting/Welcome";

const About = () => {
  return (
    <main>
      <Banner text={"About Us"} breadcrumb={"Home / About Us"} />
      <Greeting />
      <AWESOME_FEATURES color={"blue"} />
      <CLIENTS_OPINION />
    </main>
  );
};

export default About;
