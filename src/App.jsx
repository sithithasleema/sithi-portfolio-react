import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-900  ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />

        <footer className="text-center mb-10">
          Designed and Developed by{" "}
          <a
            href="https://sithithasleema.github.io/sithi-portfolio-react/"
            className="text-[#c3484b] hover:text-amber-900"
          >
            <span>Sithi Thasleema</span>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
