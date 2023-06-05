import { projectsArchive } from "../assets/projectsArchive";

function ListArchive() {
  return (
    <div>
      <table className="my-5 w-full text-left md:my-10">
        <thead className="uppercase">
          <tr>
            <th scope="col" className="py-3">
              Title
            </th>
            <th scope="col" className="hidden px-20 py-3 md:inline-block">
              Date
            </th>
            <th scope="col" className="hidden px-10 py-3 md:inline-block">
              Tags
            </th>
            <th scope="col" className="py-3">
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          {projectsArchive.map((item, id) => {
            return (
              <tr key={id} className=" border-b  border-[#d3d3d3]/20">
                <td className="whitespace-nowrap py-4 font-medium">
                  {item.title}
                </td>
                <td className="hidden px-20 py-4 opacity-70  md:inline-block">
                  {item.date}
                </td>
                <td className="hidden px-1 py-4  md:inline-block">
                  <div className="flex flex-wrap">
                    {item.tags.map((tag, id) => {
                      return (
                        <span
                          key={id}
                          className="m-1 rounded   bg-accentDark px-3 py-1 text-xs  font-medium text-textLight">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="px-1 py-4">
                  <div className="flex items-center justify-start">
                    {item.linklink && (
                      <a
                        href={item.linklink}
                        target="_blank"
                        rel="noreferrer"
                        className=" transition-all duration-100 ease-linear  hover:text-accentDark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="mr-2 h-6 w-6">
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
                        target="_blank"
                        rel="noreferrer"
                        className=" transition-all duration-100 ease-linear  hover:text-accentDark">
                        <svg
                          className="h-6 w-6"
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListArchive;
