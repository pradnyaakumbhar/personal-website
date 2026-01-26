import React from 'react';
import { motion } from 'framer-motion';
// import { textVariant } from '../utils/motion';
import { CiCircleCheck } from 'react-icons/ci';
import { GoArrowUpRight } from 'react-icons/go';
import grainImage from '../assets/grain.jpg';
import { projects } from '../utils/constants';

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};


const Projects = () => {
  return (
    <section className="pb-16 lg:py-24 px-4 bg-gray-100" id="projects">
      <div className="max-w-6xl mx-auto text-gray-900">
        <motion.div variants={textVariant()}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
          Things I&apos;ve Built
          </h2>
        </motion.div>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="sticky top-16"
              style={{ top: `calc(100px + ${index * 25}px)` }}
            >
              <div className="bg-gray-900 rounded-t-[48px] rounded-b-[24px] relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-t-[48px] after:rounded-b-[24px] after:outline-gray-800 px-8 pt-8 pb-0 border border-gray-800 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
                <div
                  className="absolute inset-0 -z-10 opacity-[0.06]"
                  style={{ backgroundImage: `url(${grainImage})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-12">
                    <h3 className="inline-flex font-bold uppercase tracking-widest text-2xl md:text-4xl text-gray-100">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-300 mt-2 md:mt-5">
                      {project.desc}
                    </p>
                    <hr className="border-t-2 border-gray-800 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-gray-300"
                        >
                          <CiCircleCheck className="size-5 md:size-6" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex my-8 gap-4 w-full">
                      <a
                        href={project.live_url}
                        className="flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Visit Live Site</span>
                          <GoArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <a
                        href={project.github_url}
                        className="flex-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-black text-gray-100 border border-gray-700 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>View Github</span>{' '}
                          <GoArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400">
                        Tech Stack
                      </h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-200"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Projects;
