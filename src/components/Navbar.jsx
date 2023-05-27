import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
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

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-textLight dark:bg-textDark transition ease transform duration-300`;

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menu]);

  return (
    <nav
      className={`${
        top ? "bg-bgLight shadow-md dark:bg-bgDark" : ""
      } sticky left-0 right-0 top-0 z-[100] transition-all duration-300 ease-out ${
        menu ? "h-screen backdrop-blur-xl" : ""
      } `}>
      <div className="flex items-center justify-between p-3">
        <h1 className="font-sans text-3xl font-bold text-textLight transition-all duration-300 ease-out dark:text-textDark">
          nitish.dev
        </h1>

        <div className="flex items-center justify-center text-textLight dark:text-textDark ">
          <div className="mr-5 hidden text-xl font-semibold md:block">
            <a
              className="group mr-5 transition-all duration-300 ease-in-out"
              href="#about">
              <span className="bg-gradient-to-r from-accentLight to-accentLight bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-accentDark dark:to-accentDark">
                About
              </span>
            </a>

            <a
              className="group mr-5 transition-all duration-300 ease-in-out"
              href="#projects">
              <span className="bg-gradient-to-r from-accentLight to-accentLight bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-accentDark dark:to-accentDark">
                Projects
              </span>
            </a>

            <a
              className="group  transition-all duration-300 ease-in-out"
              href="#contact">
              <span className="bg-gradient-to-r from-accentLight to-accentLight bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-accentDark dark:to-accentDark">
                Contact
              </span>
            </a>
          </div>

          <button
            className={`flex h-8 w-10 flex-col items-center rounded hover:bg-accentLight dark:hover:bg-accentDark md:hidden ${
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
          <ToggleTheme />
        </div>
      </div>

      <Menu menu={menu} setMenu={setMenu} />
    </nav>
  );
}

export default Navbar;
