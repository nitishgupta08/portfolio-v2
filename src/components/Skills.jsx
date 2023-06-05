import { languages, frameworks, tools, dsa } from "../assets/skills";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="mt-16 p-4 md:flex md:p-0">
        <h2
          className={`text-xl font-semibold uppercase text-accentDark transition-all duration-500 ease-out md:text-center  md:text-2xl ${
            inView ? "opacity-1 translate-x-0" : "-translate-x-[100%] opacity-0"
          }`}>
          Skills
        </h2>

        <div className="flex flex-1 flex-wrap justify-between py-5  text-textDark md:px-32 md:py-0">
          <div
            className={`w-1/2 transition-all duration-[600ms] ease-out  md:w-auto ${
              inView
                ? "opacity-1 translate-x-0 md:translate-y-0"
                : "-translate-x-[100%] opacity-0 md:translate-x-0 md:translate-y-[50%]"
            }`}>
            <h3 className="font-semibold uppercase md:text-xl">Languages</h3>
            <ul>
              {languages.map((item, id) => {
                return (
                  <li key={id} className="opacity-90">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`w-1/2 transition-all duration-[800ms] ease-out  md:w-auto ${
              inView
                ? "opacity-1 translate-x-0 lg:translate-y-0"
                : "translate-x-[100%] opacity-0 md:translate-x-0 lg:translate-y-[50%]"
            }`}>
            <h3 className="font-semibold uppercase md:text-xl">Frameworks</h3>
            <ul>
              {frameworks.map((item, id) => {
                return (
                  <li key={id} className="opacity-90">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`my-10 w-1/2 transition-all duration-[1000ms] ease-out lg:my-0 lg:w-auto ${
              inView
                ? "opacity-1 translate-x-0 md:translate-y-0"
                : "-translate-x-[100%] opacity-0 md:translate-x-0 md:translate-y-[50%]"
            }`}>
            <h3 className="font-semibold uppercase md:text-xl">Tools</h3>
            <ul>
              {tools.map((item, id) => {
                return (
                  <li key={id} className="opacity-90">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`my-10 w-1/2 transition-all duration-[1200ms] ease-out lg:my-0 lg:w-auto ${
              inView
                ? "opacity-1 translate-x-0 md:translate-y-0"
                : "translate-x-[100%] opacity-0 md:translate-x-0 md:translate-y-[50%]"
            }`}>
            <h3 className="font-semibold uppercase md:text-xl">DSA</h3>
            <ul>
              {dsa.map((item, id) => {
                return (
                  <li key={id} className="opacity-90">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center  hover:text-accentDark">
                      <span>{item.name}</span>
                      &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1">
                        <path
                          fillRule="evenodd"
                          d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
