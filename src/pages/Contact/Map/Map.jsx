import React from "react";

const GOOGLE_MAP = () => {
  return (
    <section className="py-5 sm:py-10 flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1687531253131!5m2!1sru!2s"
        title="GOOGLE_MAP"
        className="border-none w-5/6 h-96"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  );
};

export default GOOGLE_MAP;
