"use client";
import { motion } from "framer-motion";
import { Experiences } from "@/typings";
import urlFor from "@/sanity/lib/urlFor";

type Props = { experience: Experiences };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[250px] md:w-[450px] snap-center bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden py-3">
      <motion.img
        src={urlFor(experience?.companyImage).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full xl:w-[70px] xl:h-[100px] object-cover object-center bg-slate-50 p-2"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="flex space-x-2 my-2">{experience?.company}</p>
        <div className="flex">
          {experience.technology.map((tech) => (
            <img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              className="h-5 w-5 rounded-full"
              alt="cssicon"
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300 text-xs">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-1 text-xs ml-0 max-h-10 overflow-y-scroll pr-2 scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80 scrollbar-thin">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
