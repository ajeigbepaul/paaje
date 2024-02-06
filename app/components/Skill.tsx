"use client";
import { motion } from "framer-motion";
import { Skills } from "@/typings";
import urlFor from "@/sanity/lib/urlFor";

type Props = {
  directionLeft?: boolean;
  skill: Skills;
};

export const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        src={urlFor(skill?.image).url()}
        className="w-8 h-8 xl:w-14 xl:h-14 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
      <div className="w-10 h-10 xl:w-14 xl:h-14 rounded-full z-0 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
    // <div>Comming soon</div>
  );
};
