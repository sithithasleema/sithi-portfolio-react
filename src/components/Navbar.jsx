import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import git from "../assets/github-mark-white.png";
import linkedin from "../assets/InBug-White.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-gray-500 to-gray-900 backdrop-blur-lg border-b border-gray-500">
      <div className="">
        <div className="flex justify-between items-center h-26 max-w-[75%] mx-auto">
          <div className="flex gap-4 items-center">
            {" "}
            <a
              className="text-gray-300 text-4xl font-mono font-bold"
              href="#home"
            >
              <span className="text-[#c3484b]">Sithi</span>
            </a>
            <a href="https://github.com/sithithasleema">
              <img src={git} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sithi-thasleema/">
              <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Hamburger menu */}

          <div
            className="w-7 h-7 text-gray-300 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu />
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8 ">
            <a
              className="text-gray-300 hover:text-gray-100 transition-colors"
              href="#home"
            >
              Home
            </a>

            <a
              className="text-gray-300 hover:text-gray-100 transition-colors"
              href="#about"
            >
              About
            </a>

            <a
              className="text-gray-300 hover:text-gray-100 transition-colors"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="text-gray-300 hover:text-gray-100 transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
