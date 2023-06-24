import React from "react";
import Banner from "../About/Banner/Banner";
import Courses from "../Home/Courses/Courses";
import AWESOME_FEATURES from "../Home/Features/Features";
import Timer from "../Home/Timer/Timer";

const CoursesPage = () => {
  return (
    <main>
      <Banner text={"Courses"} breadcrumb={"Home / Courses"} />
      <Courses />
      <Timer />
      <AWESOME_FEATURES color={"white"} />
    </main>
  );
};

export default CoursesPage;
