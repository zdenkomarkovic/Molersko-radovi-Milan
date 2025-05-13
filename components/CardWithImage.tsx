import Image from "@/node_modules/next/image";
import React from "react";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center md:py-10 ">
      <h2 className="text-2xl md:text-5xl text-primary font-bold py-6">
        Majstor Milan Kitanović – Vaš pouzdan partner u enterijerima
      </h2>
      <p className=" first-letter:pl-6 text-lg md:text-3xl">
        Zovem se Milan Kitanović i više od 10 godina se bavim završnim radovima
        u enterijeru. Klijentima u Beogradu nudim usluge koje kombinuju
        preciznost, estetiku i funkcionalnost. Radim isključivo uz dogovor, bez
        kašnjenja i bez skrivenih troškova.
      </p>
      <div className="pt-5 flex flex-col md:flex-row justify-around">
        <div>
          <Image
            src={"/hero.jpg"}
            width={400}
            height={400}
            alt="moler"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-0 py-8 md:py-10 md:justify-between text-left">
          <p className="text-lg md:text-3xl font-bold">Zašto baš Milan?</p>{" "}
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
