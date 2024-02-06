"use client";
import { motion } from "framer-motion";
import { Skill } from "./Skill";
import { Skills } from "@/typings";
type Props = {
  skills: Skills[];
};

function Skillz({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[1px] text-gray-500 text-xs md:text-sm">
        Hover for current skill profficiency
      </h3>
      <div className="grid grid-cols-4 gap-4 pt-28">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
    // <div>Comming soon</div>
  );
}

export default Skillz;
