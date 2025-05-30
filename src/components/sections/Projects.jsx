import myPic from "../../assets/dp.PNG";
import table from "../../assets/tastytable.png";
import { projects } from "../../data/skills";

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

        <div className="border-1 p-10 border-gray-100 shadow-md shadow-gray-400  from-gray-100 to-gray-200">
          <p>
            I’m continuously improving my skills in JavaScript, React, Tailwind
            CSS, and other modern tools through hands-on projects. By working on
            real-world applications, I enhance my understanding of frontend and
            backend technologies, striving to build clean, efficient, and
            scalable code. I’m always excited to explore new frameworks,
            optimize user experiences, and solve challenges through innovative
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto pt-10">
            {projects.map((project) => (
              <a href={project.url} target="_blank">
                <div className="rounded-xl  border  border-gray-300 hover:translate-y-0.5 h-[500px] hover:border-gray-500 hover:shadow-transparent">
                  <div className="w-full h-1/2  flex justify-center border-b-2 border-gray-200 mb-4">
                    <img
                      src={project.image}
                      alt="Project image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 px-4">
                      <span className="font-semibold">{project.title} </span>{" "}
                      {""} -{" "}
                      <span className="text-lg text-[#c3484b]">
                        {project.stack}{" "}
                      </span>{" "}
                    </h3>
                    {/* <span>
                  {" "}
                  <a
                    href={project.url}
                    className="text-blue-800 hover:text-blue-500 flex "
                  >
                    View
                  </a>
                </span> */}
                    <p className="px-4 text-sm text-gray-800 line-clamp-4">
                      {project.description}
                    </p>
                    {/* <h2 className="mt-10 text-xl ">Technologies:</h2> */}
                    <ul className=" my-4 flex flex-wrap gap-2 px-4">
                      {project.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="bg-[#c3484b] py-1 px-3 rounded-full text-sm hover:bg-[#000000] w-fit text-gray-200 transition-all duration-300 ease-in cursor-pointer"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <ul className="mt-10">
                  {project.features.map((feature, index) => (
                    <li key={index} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul> */}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
