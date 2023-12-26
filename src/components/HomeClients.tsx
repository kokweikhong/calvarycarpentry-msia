"use client";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../public/images/clients/CIAP.svg";
import client2 from "../../public/images/clients/DCA.svg";
import client3 from "../../public/images/clients/HYLA.svg";
import client4 from "../../public/images/clients/MAKK.svg";
import client5 from "../../public/images/clients/MKPL.svg";
import client6 from "../../public/images/clients/P+A 1.svg";
import client7 from "../../public/images/clients/Wallflower 1.svg";

const clients = [client1, client2, client3, client4, client5, client6, client7];

const HomeClients = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="bg-black !p-4"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={`client-${index}`}>
            <div className="h-[38px] w-auto relative">
              <Image src={client} alt="client" fill className="w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeClients;
