import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Slimane from "../assets/images/slimane.webp";

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
            <div className="relative ">
              <img src={Slimane} className="rounded-md" alt="" />
            </div>
            <div>
              <div className="flex flex-col pl-3">
                <Typography variant="h2">Slimane</Typography>
                <Typography className="" variant="xl">
                  Du 1 mars 2024 au 9 janvier 2025
                </Typography>
              </div>
            </div>
          </div>
          <div className=" w-full ">
            <div className=" w-full -mt-[60px]  flex flex-row justify-end">
              <Typography
                className="  border-white border-2 bg-stone-300 py-4 px-24"
                display="white"
              >
                eTicket
              </Typography>
              <Typography
                className="border-r-white border-2 bg-stone-200 py-4 px-24"
                display="white"
              >
                Revente
              </Typography>
              <Typography
                className="bg-stone-200 border-r-white border-2  py-4 px-20"
                display="white"
              >
                Choix sur plan
              </Typography>
              <Typography
                className="bg-slate-950 border-r-white border-2 flex w-full font-bold mr-2  py-4 px-16 "
                display="white"
              >
                Réserver
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
