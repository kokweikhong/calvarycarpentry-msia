import Image from "next/image";
import accdrediation1 from "../../public/images/home/accdrediations/BCA.svg";
import accdrediation2 from "../../public/images/home/accdrediations/Bizsafe.svg";
import accdrediation3 from "../../public/images/home/accdrediations/LEED.svg";
import accdrediation4 from "../../public/images/home/accdrediations/NWFA.svg";
import accdrediation5 from "../../public/images/home/accdrediations/SGBC.svg";
import accdrediation6 from "../../public/images/home/accdrediations/SGMA.svg";
import accdrediation7 from "../../public/images/home/accdrediations/SQASC.svg";
import accdrediation8 from "../../public/images/home/accdrediations/TOP BUSINESS.svg";

const accdrediations = [
  accdrediation1,
  accdrediation2,
  accdrediation3,
  accdrediation4,
  accdrediation5,
  accdrediation6,
  accdrediation7,
  accdrediation8,
];

const HomeAccdrediations = () => {
  return (
    <section>
      <div className="flex flex-wrap">
        {accdrediations.map((accdrediation, index) => (
          <div
            key={`accdrediation-${index}`}
            className="h-[38px] w-full relative"
          >
            <Image
              src={accdrediation}
              alt="accdrediation"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAccdrediations;
