/* eslint-disable react/prop-types */
import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref}>
      <Transition
        show={inView}
        enter="transition-all duration-500 ease-out"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-1">
        <div className="md:flex md:justify-between">
          <h2 className="font-semibold uppercase text-accentLight dark:text-accentDark md:text-center md:text-xl lg:text-2xl">
            About
          </h2>

          <p className="p-5 md:px-32 md:py-0 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            dolor quam iste sequi odio. Commodi provident explicabo illum
            aperiam id veritatis ut, cupiditate tempora mollitia rerum esse! Quo
            cupiditate blanditiis quibusdam odio necessitatibus ea incidunt?
            Corrupti commodi a quibusdam accusantium amet rerum tempora
            laudantium eligendi consectetur, nisi consequuntur quasi assumenda
            ipsum minus in iste libero fugit nam! Pariatur adipisci ab numquam
            quas rerum quae expedita facilis aperiam officia possimus tempora
            nostrum, et reiciendis blanditiis. Debitis, consequatur? Sunt hic
            vero voluptates debitis deserunt in minima iusto, facere illo
            aliquid officiis iure harum doloremque accusamus cupiditate maiores
            molestiae aspernatur, autem, impedit quasi.
          </p>
        </div>
      </Transition>
    </div>
  );
}

export default AboutMe;
