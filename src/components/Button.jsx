const Button = ({ children, className, color, theme }) => {
  let background;
  switch (color) {
    case "primary":
      background = "bg-sky-600 hover:bg-sky-800";
      break;
    case "secondary":
      background = "text-slate-800 hover:text-white bg-white hover:bg-sky-950";
      break;
    default:
      background = "bg-green-500";
  }
  return (
    <div>
      <button
        className={`${className} ${background} rounded-md mt-6 px-4 py-3 uppercase shadow-xl text-white 
             text-xs md:text-sm font-medium animate duration-500 `}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
