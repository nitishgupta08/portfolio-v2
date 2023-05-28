import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";
import ListProjects from "../components/ListProjects";

function Projects() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  return (
    <div ref={ref1}>
      <Transition
        show={inView1}
        enter="transition-all duration-500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div
          id="projects"
          className="container mx-auto px-4 pt-16  text-textDark lg:px-16">
          <div className="p-4 md:flex md:justify-between md:p-0">
            <h2 className="text-xl font-semibold uppercase text-accentDark md:text-center md:text-2xl">
              Projects
            </h2>
            <ListProjects />
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Projects;
