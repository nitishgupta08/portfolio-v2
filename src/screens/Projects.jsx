import { useInView } from "react-intersection-observer";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={ref}>
      <div
        id="projects"
        className="container mx-auto px-4 pt-16  text-textDark lg:px-16">
        <div className="p-4 md:flex md:justify-between md:p-0">
          <h2
            className={`text-xl font-semibold uppercase text-accentDark transition-all  duration-200 ease-out md:text-center md:text-2xl ${
              inView
                ? "opacity-1 translate-x-0"
                : "-translate-x-[100%] opacity-0"
            }`}>
            Projects
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={cardsToShow}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            {projects.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <Card item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <p className="inline-block">
            <Link to="project-archive" className="group my-5 flex items-center">
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
      </div>
    </section>
  );
}

export default Projects;
