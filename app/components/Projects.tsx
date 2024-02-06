"use client";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import urlFor from "@/sanity/lib/urlFor";

type Props = {
  projects: Project[];
};
const projects = [1, 2, 3, 4, 5];
function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-14 md:pt-2 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80">
        {projects.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-5 items-center justify-center p-10 md:p-10 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              className="w-72 rounded-lg"
            />
            <div className="space-y-1 md:space-y-2 px-0 md:px-10 max-w-5xl">
              <h4 className="text-xs md:text-xl font-semibold text-center">
                <span className="underline decoration-[#f68]/80">
                  {i + 1} of {projects.length}
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((tech) => (
                  <img
                    key={tech?._id}
                    src={urlFor(tech.image).url()}
                    className="h-6 w-6"
                  />
                ))}
              </div>
              <p className="text-sm text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f68]/50 left-0 h-[300px] -skew-y-12" />
    </motion.div>
    // <div>Comming soon</div>
  );
}

export default Projects;
