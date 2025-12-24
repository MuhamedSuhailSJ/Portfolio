import "./App.css";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";

const Portfolio = () => {
  return (
    <body>
      <div className="bg-animation-layer"></div>
      <div className="bg-overlay-layer">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="bg-grain"></div>
      </div>
      <Header />
      <main>
        <Intro />
        <Achievements />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </body>
  );
};

export default Portfolio;
