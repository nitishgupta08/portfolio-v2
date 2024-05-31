/* eslint-disable react/prop-types */
const CustomLink = ({ children, className, ...props }) => {
  return (
    <a className={className} {...props}>
      <span className="bg-gradient-to-r from-accentDark to-accentDark bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
        {children}
      </span>
    </a>
  );
};

export default CustomLink;
