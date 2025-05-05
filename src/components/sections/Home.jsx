import myPic from "../../assets/dp.PNG";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex justify-center relative backdrop-blur-lg  mt-10  bg-gradient-to-r from-gray-700 to-gray-900 "
      >
        <div className="flex h-1/2 text-left z-10 justify-center items-center lg:pt-40 pt-30 pb-20  rounded-lg shadow-xl max-w-[85%] md:max-w-[90%]  mx-auto">
          {/* Left details section */}
          <div className="md:w-2/3 ">
            <h1 className="text-[#c3484b] text-2xl font-bold mb-2">Hello!</h1>
            <h1 className="text-3xl font-semibold mb-6 text-gray-100">
              I'm Sithi Thasleema <span className="animate-ping">|</span>
            </h1>
            <p className="mb-6  text-gray-100">
              A Sydney-based digital artist and Frontend developer, passionate
              about blending creativity with technology.
            </p>
            <p className="  text-gray-100">
              With a Bachelor's degree in Computer Science and a Diploma in IT
              (Web Development), I've recently returned to the tech world after
              running a successful art business for several years.
            </p>

            <div className="flex gap-4 mt-10 flex-col md:flex-row">
              <a
                className=" text-gray-200 px-8 py-3 text-center rounded-full max-w-[200px] bg-[#c3484b] hover:bg-[#000000] transition-all duration-300 ease-in-out"
                href="#projects"
              >
                My Works
              </a>
              <a
                className=" text-gray-200 px-8 py-3 rounded-full max-w-[200px] bg-[#c3484b] text-center  hover:bg-[#000000] transition-all duration-300 ease-in-out"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}

          <div className="hidden md:flex w-48 h-48 ">
            <img
              className="object-cover border-2 border-gray-700 rounded-full"
              src={myPic}
              alt="Your Profile"
            />
          </div>
        </div>
      </section>
    </>
  );
};
