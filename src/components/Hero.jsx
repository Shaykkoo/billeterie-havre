import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Slimane from "../assets/images/slimane.webp";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <div className="w-full">
      <Container>
        <Typography className="mt-10 mb-3" variant="h1">
          Billeterie
        </Typography>
        <hr />
        <div className="my-5 w-full py-2 px-2 bg-sky-500">
          <Typography variant="" display="white">
            46 événements trouvés. Affinez vos résultats par :
          </Typography>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="relative  ">
              <img src={Slimane} className="rounded-sm" alt="" />
            </div>
            <div>
              <div className="flex flex-col pl-3">
                <Typography
                  display="secondary"
                  className="font-bold uppercase  hover:cursor-pointer"
                  variant="h2"
                >
                  Slimane
                </Typography>
                <Typography className="" variant="">
                  Du 1 mars 2024 au 9 janvier 2025
                </Typography>
              </div>
            </div>
          </div>
          <div className=" w-full ">
            <div className=" w-full -mt-[60px]  flex flex-row justify-end">
              <Typography
                variant="sm"
                className=" flex flex-row border-white border-2 bg-stone-300 py-4 px-24"
                display="gray"
              >
                eTicket
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3 24 24"
                  fill="currentColor"
                  height="20"
                >
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </Typography>
              <Typography
                variant="sm"
                className="border-white border-2 bg-stone-300 py-4 px-24"
                display="gray"
              >
                Revente
              </Typography>
              <Typography
                variant="sm"
                className="bg-stone-300 flex flex-row border-white border-2  py-4 px-20"
                display="gray"
              >
                Choix sur plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3 24 24"
                  fill="currentColor"
                  height="20"
                >
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </Typography>
              <Typography
                variant="sm"
                className="bg-sky-900 italic uppercase border-white border-2 flex w-full font-bold mr-2  py-4 px-16 hover:cursor-pointer hover:opacity-70 "
                display="white"
              >
                Réserver
              </Typography>
            </div>
          </div>
        </div>
        <hr className="my-8" />
      </Container>
      <Carousel />
    </div>
  );
}
