import React from "react";
import { projects } from "../../data/skills";
import { ArrowRight } from "lucide-react";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-full lg:px-20 flex-col border-gray-300 "
    >
      <div className="py-20 max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex h-min-screen justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text ">
            Portfolio Projects
          </h2>
        </div>

        <div className="border-1 p-10 border-gray-100 shadow-md shadow-gray-400 hover:bg-gradient-to-r from-gray-100 to-gray-200">
          <p>
            I’m continuously improving my skills in JavaScript, React, Tailwind
            CSS, and other modern tools through hands-on projects. By working on
            real-world applications, I enhance my understanding of frontend and
            backend technologies, striving to build clean, efficient, and
            scalable code. I’m always excited to explore new frameworks,
            optimize user experiences, and solve challenges through innovative
            solutions.
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto pt-10">
            {projects.map((project) => (
              <div className="rounded-xl p-6 shadow-2xl border-b-gray-400 hover:translate-y-0.5 eas">
                <h3 className="text-xl font-bold mb-4">
                  {project.title} - {project.stack}
                </h3>
                <p>{project.description}</p>

                <h2 className="mt-10 text-xl ">Technologies:</h2>

                <ul className=" my-4 flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-[#c3484b] py-1 px-3 rounded-full text-sm hover:bg-[#000000] w-fit text-gray-200 transition-all duration-300 ease-in cursor-pointer"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <ul className="mt-10">
                  {project.features.map((feature, index) => (
                    <li key={index} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-blue-800 hover:text-blue-500 flex "
                  >
                    View Project
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
