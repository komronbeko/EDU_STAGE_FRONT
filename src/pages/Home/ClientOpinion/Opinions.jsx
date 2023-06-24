import React, { useEffect, useState } from "react";
import Heading from "../../../utils/Heading";
import trainer from "../../../assets/images/trainer.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import http from "../../../service/api";
import { API_BASE_URL } from "../../../constants/api";

const CLIENTS_OPINION = () => {
  const [opinions, setOpinions] = useState([])

  const fetchOpinions = async () => {
    try {
      const { data } = await http.get(`${API_BASE_URL}/clients`).then();
      setOpinions(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchOpinions();
  },[]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section className={`py-10 sm:py-20 my-5 sm:my-10`}>
      <Heading text="Clients say about us" color={"blue"}/>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper container">
        {opinions.map(({ id, name, image, text }) => (
          <SwiperSlide key={id} className="flex flex-row gap-10">
            <div className="w-full sm:w-1/2 xl:w-1/3 flex flex-col xl:flex-row gap-2 justify-center items-center p-5 xl:p-12 shadow-lg rounded-sm">
              <div className="w-32 h-32">
                <img src={`${API_BASE_URL}/uploads/${image}`} alt="client" className="rounded-lg" />
              </div>
              <div className="xl:w-2/3 w-full flex justify-start items-start flex-col gap-2 ml-5">
                <h5 className="text-blue font-bold text-xl">{name}</h5>
                <p className="text-[15px] font-thin text-gray text-start">{text}</p>
              </div>
            </div>
            {/* CTRL + C && CTRL + V-- SHU JOYINI BIR O'YLAB KO'RISH, MAP QILISH JARAYONINI */}
            <div className="hidden sm:flex w-1/2 xl:w-1/3 flex-col xl:flex-row gap-2 justify-center items-center p-5 xl:p-12 shadow-lg rounded-sm">
              <div className="w-32 h-32">
                <img src={trainer} alt="client" className="rounded-lg" />
              </div>
              <div className="xl:w-2/3 w-full flex justify-start items-start flex-col gap-2 ml-5">
                <h5 className="text-blue font-bold text-xl">{name.name2}</h5>
                <p className="text-[15px] font-thin text-gray text-start">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, nobis. Numquam quos quibusdam quisquam facere vel optio
                  rerum natus beatae?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CLIENTS_OPINION;
