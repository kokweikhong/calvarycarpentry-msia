import Image from "next/image";

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

const HomeServices = () => {
  return (
    <section className="container mx-auto">
      <div className="relative z-3 mt-[50px]">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 auto-rows-fr gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="col-span-full md:col-span-6 lg:col-span-4"
              >
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
  );
};

export default HomeServices;
