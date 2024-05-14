import React from "react";
import Container from "../components/Container";
import Logo from "../assets/logos/Logo.png";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Background from "../assets/images/panorama_lehavre.jpg";
import Typography from "../components/Typography";

export default function Header() {
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
            <div className=" flex flex-row z-20">
              <img className="absolute" src={Logo} alt="" />
              <Typography
                variant="title"
                display="white"
                className=" pl-14 font-thin"
              >
                LE HAVRE
              </Typography>
            </div>
            <div className="flex flex-row gap-5 z-20">
              <Button link="/login" label="Se connecter" color="primary" />
              <Button link="/signin" label="S'inscrire" color="secondary" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
