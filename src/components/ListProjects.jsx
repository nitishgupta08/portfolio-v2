import { projects } from "../assets/projects";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function ListProjects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      {projects.map((item, id) => {
        return (
          <div
            key={id}
            className={`my-4 flex flex-col items-center rounded-lg border  border-[#d3d3d3]/10 shadow transition-all duration-[1500ms] ease-out md:mx-20  md:mt-0 md:flex-row ${
              inView ? "opacity-1 translate-y-0" : "translate-y-[50%] opacity-0"
            }`}>
            <div>
              <img
                height="800px"
                width="800px"
                className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                src={item.imgSrc}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl md:font-bold">
                {item.title}
              </h2>
              <time className="py-0.5 text-xs uppercase tracking-wide md:text-sm">
                {item.from} - {item.to}
              </time>
              <div className="my-1 flex flex-wrap">
                {item.tags.map((tag, id) => {
                  return (
                    <span
                      key={id}
                      className="my-1 mr-1 rounded bg-accentDark px-3 py-1 text-xs font-medium text-textLight ">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <p className="my-2">{item.description}</p>

              <div className="flex">
                {item.linklink && (
                  <a
                    href={item.linklink}
                    aria-label="live link"
                    target="_blank"
                    rel="noreferrer"
                    className=" transition-all duration-100 ease-linear  hover:text-accentDark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-5 h-8 w-8">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>
                )}

                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    aria-label="github link"
                    target="_blank"
                    rel="noreferrer"
                    className=" transition-all duration-100 ease-linear  hover:text-accentDark">
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub link</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <p className="inline-block ">
        <Link
          to="project-archive"
          className="group mx-2 my-12 flex items-center md:mx-20">
          <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
            View Full Project Archive&nbsp;
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4 transition-all duration-500 ease-out group-hover:translate-x-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </p>
    </div>
  );
}

export default ListProjects;
