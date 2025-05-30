const PrimaryBtn = ({ className, href, onClick, children, px, py, bg }) => {
  const classes = `relative inline-block  text-base font-outfit font-medium drop-shadow-lg rounded-full ${
    bg ||
    "text-white bg-brand hover:bg-white hover:text-brand border border-brand"
  } transition-all ease-in-out duration-300 ${px || "px-7 sm:px-8"} ${
    py || "py-3"
  } ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default PrimaryBtn;
