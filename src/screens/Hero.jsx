import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Transition
        show={inView}
        enter="transition-all duration-500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div className="container mx-auto h-screen px-8 py-32 text-textLight transition-all duration-300 ease-out dark:text-textDark lg:py-48">
          <h3 className="text-3xl lg:text-5xl">
            Hey! <span className="animate-wave">👋</span>
          </h3>

          <h1 className="mt-8 text-4xl md:text-7xl lg:text-8xl">
            I&#39;m{" "}
            <span className="font-bold text-accentLight dark:text-accentDark">
              Nitish Gupta
            </span>
          </h1>

          <p className="mt-3 py-3 text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odio,
            repellendus provident amet rem reprehenderit quibusdam itaque, quos
            hic ipsam recusandae voluptatum perferendis facere ab corporis iure
            eos sunt laborum.🧑‍💻
          </p>
        </div>
      </Transition>
    </div>
  );
}

export default Hero;
