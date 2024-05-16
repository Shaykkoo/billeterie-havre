import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Logo from "../assets/logos/Logo.png";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Background from "../assets/images/panorama_lehavre.jpg";
import Typography from "../components/Typography";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in, for example by checking a token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="relative py-28 bg-blue-100">
        <img
          className="absolute w-full h-full opacity-80 object-cover z-0 top-0 left-0"
          src={Background}
          alt=""
        />
        <Container>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-row z-20">
              <img className="absolute" src={Logo} alt="Logo" />
              <Typography
                variant="title"
                display="white"
                className="pl-14 font-thin"
              >
                LE HAVRE
              </Typography>
            </div>
            <div className="flex flex-row gap-5 z-20">
              {isLoggedIn ? (
                <a
                  className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                  href="/useraccount"
                >
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              ) : (
                <>
                  <Button link="/login" label="Se connecter" color="primary" />
                  <Button link="/signin" label="S'inscrire" color="secondary" />
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
