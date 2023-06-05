import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div
        id="contact"
        className="container mx-auto flex flex-col items-center  justify-center pt-20  text-textDark ">
        <div>
          <div
            className={`transition-all duration-500 ease-out ${
              inView
                ? "opacity-1 translate-x-0"
                : "-translate-x-[100%] opacity-0"
            }`}>
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
          </div>

          <div
            className={`transition-all duration-[750ms] ease-out ${
              inView
                ? "opacity-1 translate-y-0"
                : "translate-y-[100%] opacity-0"
            }`}>
            <h2 className="text-center text-4xl font-bold lg:text-5xl">
              Get in touch
            </h2>
            <p className="my-5 max-w-xs text-center md:w-96">
              Whether you have an idea for a project or just want to say hi,
              feel free to send me an email!
            </p>

            <div className="flex justify-center">
              <button className="group-hover:to-buttonLights group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-buttonLight to-buttonDark p-0.5 font-medium hover:text-[white] focus:outline-none focus:ring-4 group-hover:from-buttonDark">
                <span className="relative rounded-md bg-bgDark px-5 py-3 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                  <a href="mailto:nitishkg.88@gmail.com">
                    <span className="">Say Hello</span>
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
