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
    <main className="">
      {/* Fullscreen Video Container */}
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
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
          <h1 className="text-4xl font-bold mb-4">Premium Timber Artistry</h1>
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
      <section className="">
        <div className="h-[400px] relative overflow-hidden after:abosulte after:w-full after:h-full after:bg-[#000] after:z-2 after:opacity-20"></div>
        <div className="relative z-3 -mt-[140px]">
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
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
