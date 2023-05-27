import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

function About() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref1}>
      <Transition
        show={inView1}
        enter="transition-all duration-500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div
          id="about"
          className="container mx-auto px-4 pt-20 text-textLight dark:text-textDark  lg:px-16">
          <AboutMe />
          <Skills />
          <Experience />
        </div>
      </Transition>
    </div>
  );
}

export default About;
