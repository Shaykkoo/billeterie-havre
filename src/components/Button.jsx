<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, color, theme, link, label }) => {
<<<<<<< Updated upstream
=======
=======
const Button = ({ children, className, color, theme }) => {
>>>>>>> cff6b43 (billeterie)
=======
const Button = ({ children, className, color, theme }) => {
>>>>>>> cff6b43 (billeterie)
=======
const Button = ({ children, className, color, theme }) => {
>>>>>>> cff6b43 (billeterie)
=======
const Button = ({ children, className, color, theme }) => {
>>>>>>> cff6b43 (billeterie)
=======
const Button = ({ children, className, color, theme }) => {
>>>>>>> cff6b43 (billeterie)
>>>>>>> Stashed changes
  let background;
  switch (color) {
    case "primary":
      background = "bg-sky-600 hover:bg-sky-800";
      break;
    case "secondary":
<<<<<<< Updated upstream
      background = "text-slate-800 hover:text-white bg-white hover:bg-sky-950";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      background = "text-slate-700 hover:text-white bg-white hover:bg-sky-950";
>>>>>>> Stashed changes
      break;
    default:
      background = "none";
  }

  // Si le prop 'lien' est fourni, utilisez une balise <a> pour l'ouvrir dans une nouvelle page
  const ButtonComponent = link ? "a" : "button";

  return (
    <div>
      <ButtonComponent
        href={link} // Utilisez 'href' si 'lien' est fourni
        to={link} // Utilisez 'to' si 'lien' est fourni pour la navigation interne
        className={`${className} ${background} rounded-md mt-6 px-4 py-3 uppercase shadow-xl text-white 
             text-xs md:text-sm font-medium animate duration-500 `}
      >
        {label || children}{" "}
        {/* Utilisez le prop 'label' s'il est défini, sinon utilisez 'children' */}
      </ButtonComponent>
    </div>
  );
};

<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
=======
>>>>>>> cff6b43 (billeterie)
>>>>>>> Stashed changes
export default Button;
