"use client";
import { Experiences } from "@/typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experiences[] };

function Experience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory absolute top-36 md:top-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80 scrollbar-thin md:mt-10">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
