import React from "react";
import Banner from "../About/Banner/Banner";
import CONTACT_INFO from "./Info/Contact_Info";
import GOOGLE_MAP from "./Map/Map";

const CoursesPage = () => {
  return (
    <main>
      <Banner text={"Contact Us"} breadcrumb={"Home / Contact"} />
      <GOOGLE_MAP />
      <CONTACT_INFO />
    </main>
  );
};

export default CoursesPage;
