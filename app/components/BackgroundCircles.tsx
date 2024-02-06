"use client";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["10%", "10%", "40%", "70%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#f68] opacity-20 h-[400px] w-[400px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
