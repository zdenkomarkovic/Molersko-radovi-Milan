import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 pb-10 md:pt-24">
      <div className="container px-2 md:px-4 mx-auto space-y-8">
        <h1 className="md:text-5xl text-center text-primary font-bold">
          Izrada Demit Fasade – Toplotna i Estetska Zaštita Vašeg Doma
        </h1>
        <p>
          Demit fasada predstavlja jedno od najefikasnijih rešenja za
          termoizolaciju objekta, čime se postižu uštede u{" "}
          <span className="font-bold text-primary">grejanju i hlađenju</span>,
          produžava vek trajanja objekta i značajno poboljšava spoljašnji izgled
          kuće, zgrade ili poslovnog prostora.{" "}
          <span className="font-bold text-primary">Majstor Laslo</span> iz
          Temerina sa višegodišnjim iskustvom u izradi fasada nudi kompletnu
          uslugu – od pripreme podloge do završnog sloja.
        </p>
        <h2 className="md:text-4xl text-primary font-bold">
          {" "}
          Šta uključuje naša usluga izrade fasade?{" "}
        </h2>
        <ul className="font-bold">
          <li>Postavljanje termoizolacije</li>
          <li>Armiranje i gletovanje</li>
          <li>Završna obrada - fasadne boje i strukture</li>{" "}
        </ul>{" "}
        <div className="grid md:grid-cols-2 gap-5">
          <Image
            src={"/moler.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/moler1.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
