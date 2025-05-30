import React from "react";
import { frontEndSkills, backEndSkills } from "../../data/skills.js";
import { education, certificates, workExperience } from "../../data/skills.js";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-full lg:px-20 flex-col  border-gray-300 shadow-2xl  "
    >
      <div className="py-20 max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex h-min-screen justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text ">
            About Me
          </h2>
        </div>

        {/* Experience */}

        <div className="grid grid-cols-1  gap-6 mt-8">
          <div className="p-6 rounded-xl border-gray-100 border-1  shadow-md shadow-gray-400 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <h3 className="text-xl font-bold mb-6">Work Experience</h3>
            <ul className="list-disc list-inside">
              {workExperience.map((work) => (
                <li className="mb-8">
                  <strong>{work.role}</strong>
                  <p>
                    {work.company} -{" "}
                    <span className="italic">{work.period}</span>
                  </p>
                  <ul className="list-disc list-inside mt-8 text-gray-700">
                    {work.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-1 p-10 border-gray-100 shadow-md shadow-gray-400 hover:bg-gradient-to-r from-gray-100 to-gray-200">
          <p>
            I enjoy combining creativity with technical skills to build
            responsive, user-friendly applications. My background includes TAFE
            diplomas in both frontend and backend development, and I
            continuously work on improving my skills in JavaScript, React,
            Tailwind CSS, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-10">
            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
              <div className="flex flex-wrap gap-2">
                {frontEndSkills.map((tech) => (
                  <span className="bg-[#c3484b] py-1 px-3 rounded-full text-sm hover:bg-[#000000] w-fit text-gray-200 transition-all duration-300 ease-in cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 ">
              <h3 className="text-xl font-bold mb-4">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {backEndSkills.map((tech) => (
                  <span className="bg-[#c3484b] py-1 px-3 rounded-full text-sm hover:bg-[#000000] w-fit text-gray-200 transition-all duration-300 ease-in cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education and experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}

          <div className="p-6 rounded-xl border-gray-100 border-1  shadow-md shadow-gray-400 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <ul className="list-disc list-inside">
              {education.map((edu) => (
                <li className="mb-8">
                  <strong>{edu.title}</strong>
                  <p>
                    {edu.institution} -{" "}
                    <span className="italic">{edu.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates */}
          <div className="p-6 rounded-xl border-gray-100 border-1  shadow-md shadow-gray-400 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <h3 className="text-xl font-bold mb-6">Certificates</h3>
            <ul className="list-disc list-inside">
              {certificates.map((cert) => (
                <li className="mb-8">
                  <strong>{cert.title}</strong>
                  <p>
                    {cert.institution} -{" "}
                    <span className="italic">{cert.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
