import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ListArchive from "../components/ListArchive";

function ProjectArchive() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <div className="container mx-auto p-4  text-textDark lg:px-32">
        <p className="my-4 inline-block  text-buttonDark">
          <Link to="/" className="group mt-12 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 transition-all duration-500 ease-out group-hover:-translate-x-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            &nbsp;
            <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-xl transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              nitish.dev
            </span>
          </Link>
        </p>

        <h1 className="text-4xl font-bold md:text-7xl">All Projects</h1>

        <ListArchive inView={inView} />
      </div>
    </div>
  );
}

export default ProjectArchive;
