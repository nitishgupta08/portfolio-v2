// eslint-disable-next-line react/prop-types
function Menu({ menu, setMenu }) {
  return (
    <div className={menu ? "block" : "hidden"}>
      <div className="m-2 my-5 flex flex-col text-4xl  text-textDark">
        <a
          href="#about"
          onClick={() => setMenu(false)}
          className={`mb-4 flex items-center rounded py-2 pl-3 pr-4  hover:bg-accentDark ${
            menu ? "animate-slide-down-1" : ""
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-9 w-9">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="ml-2">About</span>
        </a>
        <a
          href="#projects"
          onClick={() => setMenu(false)}
          className={`:hover:bg-accentDark mb-4 flex items-center rounded py-2 pl-3  pr-4 ${
            menu ? "animate-slide-down-2" : ""
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-9 w-9">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
          <span className="ml-2">Projects</span>
        </a>
        <a
          href="#contact"
          onClick={() => setMenu(false)}
          className={`flex items-center rounded py-2 pl-3 pr-4  hover:bg-accentDark ${
            menu ? "animate-slide-down-3" : ""
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-9 w-9">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span className="ml-2">Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
