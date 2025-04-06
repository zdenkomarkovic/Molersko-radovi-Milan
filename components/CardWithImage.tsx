import Image from "@/node_modules/next/image";
import React from "react";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center md:py-20 ">
      <h2 className="text-2xl md:text-5xl text-primary font-bold py-6">
        Zašto odabrati baš nas?
      </h2>
      <div className="flex flex-col md:flex-row md:gap-20  items-stretch ">
        <div>
          <Image
            src={"/hero.jpg"}
            width={700}
            height={700}
            alt="moler"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-0 py-8 md:py-20 md:justify-between text-left">
          <p className="">
            {" "}
            <span className="font-bold">Dugogodišnje iskustvo</span> - Stručnost
            i preciznost u radu.
          </p>
          <p className="">
            <span className="font-bold">Korišćenje vrhunskih materijala</span> -
            Boje i premazi koji garantuju dug vek trajanja.
          </p>
          <p className="">
            <span className="font-bold">Pedantnost i profesionalnost</span> -
            Čist i uredan rad, bez nepotrebnog nereda.
          </p>
          <p className="">
            <span className="font-bold">Poštovanje rokova</span> - Završen posao
            u dogovorenom vremenskom periodu.
          </p>
          <p className="">
            <span className="font-bold">Pristupačne cene</span> - Kvalitetan rad
            uz fer i povoljne cene.
          </p>
          <p className="">
            <span className="font-bold">Fleksibilnost</span> - Radimo u skladu s
            vašim željama i potrebama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
