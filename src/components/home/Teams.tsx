import Image from "next/image";

import teamIrene from "@/../public/images/home/teams_irene.jpg";
import teamRaziq from "@/../public/images/home/teams_raziq.jpg";
import teamSC from "@/../public/images/home/teams_sc.jpg";
import teamUncleHo from "@/../public/images/home/teams_uncleho.jpg";

import youtube from "@/../public/images/home/youtube.svg";

type Team = {
  name: string;
  position: string;
  image: any;
  youtube?: string;
};

const teams: Team[] = [
  {
    name: "Sheng Chuan",
    position: "Project QA/QC",
    image: teamSC,
    youtube: "https://www.youtube.com/watch?v=7JYJQ3yUA7c",
  },
  {
    name: "Irene",
    position: "Sales Manager",
    image: teamIrene,
    youtube: "https://www.youtube.com/watch?v=7JYJQ3yUA7c",
  },
  {
    name: "Raziq",
    position: "Project Manager",
    image: teamRaziq,
    youtube: "https://www.youtube.com/watch?v=7JYJQ3yUA7c",
  },
  {
    name: "Uncle Ho",
    position: "Project Manager",
    image: teamUncleHo,
    youtube: "https://www.youtube.com/watch?v=7JYJQ3yUA7c",
  },
];

const Teams = () => {
  return (
    <section className="mt-[50px]">
      <div className="py-4 border-y border-gray-300 w-full text-center">
        <h2 className="uppercase text-xl font-bold">Our Timber Specialist</h2>
      </div>
      <div className="container mx-auto sm:px-6 lg:px-8 mt-[50px]">
        <div>
          <p className="text-center text-lg text-headingDark mb-8">
            Meet our skilled artisans dedicated to crafting exquisite timber
            floors, infusing every space with enduring elegance and natural
            charm.
          </p>
        </div>
        <div className="relative md:grid md:grid-cols-2 gap-4">
          {teams.map((team) => (
            <div key={team.name} className="mb-[45px] w-full group relative">
              <div className="w-[150px] h-[153px] group-hover:-mt-[15px] relative z-[2] mt-[14px] shadow-[0_2px_48px_0_rgba(0,0,0,0.13)] transition-all duration-300 ease-in-out">
                <Image
                  src={team.image}
                  alt="team"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="content absolute z-[1] bg-white right-[15px] top-0 w-4/5 h-[183px] pl-[120px] flex items-center overflow-hidden">
                <div className="group-hover:before:bg-[#1F2128] w-full relative min-h-[85px] before:absolute before:w-[5px] before:h-[85px] before:right-0 before:bg-[#dddddd] before:transition-all before:duration-300">
                  <h5 className="user-name w-full tracking-[0.69px] text-headingDark mb-[5px] mt-[3px]">
                    {team.name}
                  </h5>
                  <span className="uppercase text-textDark tracking-[0.52px] mb-[10px] pr-2">
                    {team.position}
                  </span>
                  <ul className="social overflow-x-hidden">
                    <li>
                      <a
                        href={team.youtube}
                        className="inline-block text-sm text-[#6F8BA4] mr-[15px]"
                      >
                        <div className="w-[30px] h-[30px] relative top-0 left-0">
                          <Image
                            src={youtube}
                            alt="youtube"
                            fill
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    {/* <!-- <li><a href="#"><i class="fa fa-facebook"></i></a></li> -->
                    <!-- <li><a href="#"><i class="fa fa-twitter"></i></a></li> -->
                    <!-- <li><a href="#"><i class="fa fa-linkedin"></i></a></li> -->
                    <!-- <li><a href="#"><i class="fa fa-github"></i></a></li> --> */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
