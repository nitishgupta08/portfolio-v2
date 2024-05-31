import Pill from "./Pill";
import CustomLink from "./CustomLink";
import { GitHub, ExternalLink } from "../../assets/svg";
const Card = (item) => {
  const { imgSrc, title, description, liveLink, githubLink, tags, from, to } =
    item.item;
  return (
    <div className="relative my-2 flex h-[40rem] w-full max-w-[32rem] flex-col rounded-xl bg-[#03181b] bg-clip-border shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border shadow-lg">
        <img src={imgSrc} alt={title} />
        <div className="to-bg-black-10 from-transparent via-transparent to-black/60 absolute inset-0 h-full w-full bg-gradient-to-tr"></div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-medium md:text-3xl">{title}</h2>
          <div className="flex">
            {liveLink && (
              <CustomLink
                href={liveLink}
                aria-label="live link"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-100 ease-linear  hover:text-accentDark"
              >
                <ExternalLink />
              </CustomLink>
            )}

            {githubLink && (
              <CustomLink
                href={githubLink}
                aria-label="github link"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-100 ease-linear  hover:text-accentDark"
              >
                <GitHub />
              </CustomLink>
            )}
          </div>
        </div>
        <time className="py-1 text-xs uppercase tracking-wide md:text-sm">
          {from} - {to}
        </time>
        <p className="text-gray-700 my-3 block font-sans text-base font-light leading-relaxed antialiased">
          {description}
        </p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <div className="my-1 flex flex-wrap">
            {tags.map((tag, id) => {
              return <Pill key={id}>{tag}</Pill>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
