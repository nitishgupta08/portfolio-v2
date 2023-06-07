import { useState, useEffect } from "react";
import Menu from "./Menu";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset > 20);
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-textDark transition ease transform duration-300`;

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menu]);

  return (
    <>
      <button
        aria-label="scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-2 right-2 text-3xl transition-all duration-500 ease-out md:bottom-5 md:right-5 md:text-5xl ${
          top ? "opacity-1" : "opacity-0"
        }`}>
        ☝️
      </button>

      <nav
        className={`${
          top ? "backdrop-blur" : ""
        } fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ease-out ${
          menu ? "h-screen backdrop-blur-xl" : ""
        } `}>
        <header className="flex items-center justify-between p-3">
          <h1 className="font-sans text-3xl font-bold  text-textDark transition-all duration-300 ease-out">
            nitish.dev
          </h1>

          <div className="flex items-center justify-center text-textDark ">
            <div className="mr-5 hidden text-xl font-semibold md:block">
              <a
                aria-label="about"
                className="group mr-5 transition-all duration-300 ease-in-out"
                href="#about">
                <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  About
                </span>
              </a>

              <a
                aria-label="projects"
                className="group mr-5 transition-all duration-300 ease-in-out"
                href="#projects">
                <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  Projects
                </span>
              </a>

              <a
                aria-label="contact"
                className="group  transition-all duration-300 ease-in-out"
                href="#contact">
                <span className="bg-gradient-to-r  from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  Contact
                </span>
              </a>
            </div>

            <button
              className={`flex h-8 w-10 flex-col items-center rounded hover:bg-accentDark md:hidden ${
                menu ? "justify-top" : "justify-center"
              }`}
              onClick={() => setMenu(!menu)}>
              <div
                className={`${genericHamburgerLine} ${
                  menu ? "translate-y-3 -rotate-45 opacity-100" : "opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  menu ? "translate-y-0 rotate-45 opacity-100 " : "opacity-100"
                }`}
              />
            </button>
          </div>
        </header>

        <Menu menu={menu} setMenu={setMenu} />
      </nav>
    </>
  );
}

export default Navbar;
