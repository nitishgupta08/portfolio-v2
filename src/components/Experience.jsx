import { experience } from "../assets/experience";
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <Transition
        show={inView}
        enter="transition-all duration-1500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div className="mt-16 md:flex md:justify-between">
          <h2 className="font-semibold uppercase text-accentLight dark:text-accentDark md:text-xl lg:text-2xl">
            Experience
          </h2>

          <div>
            <div className="relative px-4 py-4 before:bg-[#a9a9a9] before:dark:bg-[#d3d3d3] md:col-span-8 md:mx-20 md:space-y-8 md:py-0 md:before:absolute md:before:-left-3 md:before:bottom-0 md:before:top-2 md:before:w-0.5">
              {experience.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="mb-10 flex flex-col before:bg-accentLight  last:mb-0  before:dark:bg-accentDark md:relative md:my-0 md:before:absolute md:before:left-[-35px] md:before:top-2 md:before:z-[1] md:before:h-4 md:before:w-4 md:before:rounded-full">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {item.designation}
                    </h3>
                    <h4 className=" font-semibold tracking-wide">
                      {item.company}
                    </h4>
                    <time className="dark:text-gray-400 text-xs uppercase tracking-wide">
                      {item.from} - {item.to}
                    </time>
                    <p className="mt-3">{item.description}</p>

                    <div className="my-3 flex flex-wrap">
                      {item.tags.map((tag, id) => {
                        return (
                          <span
                            key={id}
                            className="my-1 mr-2 rounded  bg-accentLight px-3 py-1 text-xs font-medium text-textDark dark:bg-accentDark dark:text-textLight">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="inline-block ">
              <a
                href="#"
                target="_blank"
                className="group my-12 flex items-center px-4 md:mx-12">
                <span className="bg-gradient-to-r from-accentLight to-accentLight bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-accentDark dark:to-accentDark">
                  View my Résumé&nbsp;
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mx-1 h-4 w-4 transition-all duration-500 ease-out group-hover:translate-y-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Experience;
