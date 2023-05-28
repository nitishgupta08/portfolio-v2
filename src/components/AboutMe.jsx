/* eslint-disable react/prop-types */
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div ref={ref}>
      <Transition
        show={inView}
        enter="transition-all duration-500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div className="p-4 md:flex md:justify-between md:p-0">
          <h2 className="text-xl font-semibold uppercase text-accentDark md:text-center  md:text-2xl">
            About
          </h2>

          <div className="py-3 md:px-32 md:py-0">
            <p className="md:text-xl">
              I am a hardworking college student, driven by a deep sense of
              motivation and armed with an impressive array of powerful skills.
              I bring to the table a commitment to utilize my abilities in order
              to contribute to and advance the mission of any organization I am
              a part of. My goal is to develop applications that are, behind the
              scenes, both scalable and efficient, while at the same time
              offering users experiences that are pixel-perfect and engaging.
            </p>

            <br />

            <p className="md:text-xl">
              When I&#39;m not working, I like to explore new places, relax by
              watching films, and whip up delicious meals for my loved ones.
            </p>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default AboutMe;
