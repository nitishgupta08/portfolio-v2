import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto px-4 pt-16 text-textLight dark:text-textDark lg:px-16">
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default About;
