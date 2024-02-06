"use client"
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Social } from '@/typings';
type Props = {
 socials:Social[]
}

const Header = ({socials}: Props) => {
  return (
    <header className="flex items-start justify-between sticky top-0 max-w-5xl mx-auto xl:items-center z-20 p-6">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social,i) => (
          <SocialIcon
            key={i}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <div className="uppercase hidden md:inline-flex text-sm text-gray-400">
          <a href="#contact">get in touch</a>
        </div>
      </motion.div>
    </header>
    // <div>Comming soon</div>
  );
}

export default Header
