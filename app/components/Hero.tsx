"use client";
import urlFor from "../sanity/libs/urlFor";
import { PageInfo } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "I code for a living.tsx",
      "<Frontend/>",
      "React JS, Next Js",
      " Material UI, Tailwind CSS",
      "UI/UX with Figma",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroimage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold pb-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f68" />
        </h1>
        <div className=" pt-1 md:pt-4 ">
          <a href="#about">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f68]/40 hover:text-[#f68]/40">
              About
            </button>
          </a>
          <a href="#experience">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f68]/40 hover:text-[#f68]/40">Experience</button>
          </a>
          <a href="#skills">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f68]/40 hover:text-[#f68]/40">Skills</button>
          </a>
          <a href="#projects">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f68]/40 hover:text-[#f68]/40">Project</button>
          </a>
        </div>
      </div>
    </div>
    // <div>Comming soon</div>
  );
}
