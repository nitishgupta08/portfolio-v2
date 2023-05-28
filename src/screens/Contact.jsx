import { Transition } from "@headlessui/react";
import { useInView } from "react-intersection-observer";

function Contact() {
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
          id="contact"
          className="container mx-auto flex flex-col items-center  justify-center pt-20 text-textLight dark:text-textDark ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="m-auto my-1 block h-12 w-12">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>

            <h2 className="text-center text-4xl font-bold lg:text-5xl">
              Get in touch
            </h2>
            <p className="my-5 max-w-xs text-center md:w-96">
              Whether you have an idea for a project or just want to say hi,
              feel free to send me an email!
            </p>

            <div className="flex justify-center">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-buttonLight to-buttonDark p-0.5 font-medium hover:text-[white] focus:outline-none focus:ring-4 group-hover:from-buttonDark group-hover:to-buttonLight dark:text-[white]">
                <span className="relative rounded-md bg-bgLight px-5 py-3 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-bgDark">
                  <a href="mailto:nitishkg.88@gmail.com">
                    <span className="">Say Hello</span>
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Contact;
