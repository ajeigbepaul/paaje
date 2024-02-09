import { Project } from "@/typings";
import { Skills } from "@/typings";
import { Social, PageInfo, Experiences } from "@/typings";

import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skillz from "./components/Skillz";
import { getExperiences, getPageInfo, getProjects, getSkills, getSocials } from "./sanity/sanity-utils";
import urlFor from "./sanity/libs/urlFor";
export default async function Home() {
  const projects:Project[] = await getProjects()
  const skills:Skills[] = await getSkills()
  const socials:Social[] = await getSocials()
  const pageInfo: PageInfo = await getPageInfo();
  const experience:Experiences[] = await getExperiences()
  
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80 scrollbar-thin overflow-x-hidden">
        <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center relative pt-20">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experience} />
      </section>
      <section id="skills" className="snap-center">
        <Skillz skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-6 w-6 md:h-10 md:w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo?.heroimage).url()}
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
}
