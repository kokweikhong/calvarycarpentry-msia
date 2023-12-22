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

import exteriorSvg from "../../public/images/home/exterior.svg";
import interiorSvg from "../../public/images/home/interior.svg";
import maintenanceSvg from "../../public/images/home/maintenance.svg";

type Service = {
  title: string;
  description: string;
  icon: any;
};

const services: Service[] = [
  {
    title: "INTERIOR",
    description:
      "Discover the Perfect Interior Piece: Explore a Range of Timbers, Colors, and Patterns at Kandinsky®.",
    icon: interiorSvg,
  },
  {
    title: "EXTERIOR",
    description:
      "Elevate Your Outdoor Projects with Premium Sustainable Materials: Accoya® and Bamboo, Trusted Choices of Architects and Landscapers.",
    icon: exteriorSvg,
  },
  {
    title: "MAINTENANCE",
    description:
      "Revitalize Your Timber: From Treatments to Restoration. Connect with Our Specialists for Lasting Transformation. Discover Silverwood®",
    icon: maintenanceSvg,
  },
];

const clients = [client1, client2, client3, client4, client5, client6, client7];

export default function Home() {
  return (
    <main className="h-[1920px]">
      {/* Fullscreen Video Container */}
      <div className="relative h-screen z-[10000]">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover md:hidden"
          autoPlay
          muted
          loop
          onCanPlay={(e) => (e.currentTarget.playbackRate = 0.5)}
        >
          <source src={"/videos/homepage_potrait.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          onCanPlay={(e) => (e.currentTarget.playbackRate = 0.5)}
        >
          <source src={"/videos/homepage_landscape.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Premium Timber Artistry
          </h1>
          <p className="text-lg text-center mb-8">
            Crafting Excellence in Timber: Discover Calvary Carpentry's Expert
            Woodworkers
          </p>
          <a
            href="#"
            className="bg-white text-black py-2 px-6 rounded-full font-semibold transition duration-300 hover:bg-gray-300"
          >
            Explore Timber
          </a>
          <p className="mt-4">We’ve Got Wood For You</p>
        </div>
      </div>

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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="bg-black !p-4"
        >
          {clients.map((client) => (
            <SwiperSlide>
              <div className="h-[38px] w-auto">
                <Image src={client} alt="client" className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ***** Home Parallax Area Start ***** */}
      <section className="container mx-auto">
        <div className="relative z-3 mt-[50px]">
          <div className="container">
            <div className="grid grid-cols-12 auto-rows-fr space-x-0 space-y-4 md:space-x-4 md:space-y-0">
              {services.map((service) => (
                <div className="col-span-full md:col-span-6 lg:col-span-4">
                  <div className="bg-[#fff] shadow-[0_2px_48px_0_rgba(0,0,0,0.13)] py-[55px] px-[40px] text-center mb-[30px] hover:-mt-[10px] transition-all duration-300">
                    <div className="w-[60px] h-[60px] block mb-[30px] mx-auto">
                      <Image
                        src={service.icon}
                        alt="interior"
                        className="w-full h-full"
                      />
                    </div>
                    <h5 className="text-headingDark text-[16px] font-normal tracking-[0.7px] mb-[15px]">
                      {service.title}
                    </h5>
                    <p className="text-textDark trackng-[0.88px] leading-[26px] mb-[20px]">
                      {service.description}
                    </p>
                    <a className="dark-btn m-auto group" href="gallery.html">
                      <span className="show-btn group-hover:-left-[195px]">
                        READ MORE
                      </span>
                      <span className="hide-btn group-hover:left-0">
                        READ MORE
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ***** Home Parallax Area End ***** */}
    </main>
  );
}
