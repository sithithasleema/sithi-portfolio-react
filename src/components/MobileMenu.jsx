import { X } from "lucide-react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`md:hidden fixed top-0 left-0 w-full bg-gray-700 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <div
        onClick={() => setMenuOpen(false)}
        className="absolute top-9 right-5 text-white text-3xl focus:outline-none cursor-pointer"
      >
        <X />
      </div>

      <a
        className={`text-2xl font-semibold text-white my-4 transform transition-transform durantion-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
        href="#home"
      >
        Home
      </a>

      <a
        className={`text-2xl font-semibold text-white my-4 transform transition-transform durantion-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
        href="#about"
      >
        About
      </a>

      <a
        className={`text-2xl font-semibold text-white my-4 transform transition-transform durantion-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
        href="#projects"
      >
        Projects
      </a>

      <a
        className={`text-2xl font-semibold text-white my-4 transform transition-transform durantion-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
};
