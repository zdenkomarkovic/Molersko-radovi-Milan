import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 pb-10 md:pt-24">
      <div className="container px-2 md:px-4 mx-auto  text-center space-y-8">
        <h1 className="md:text-5xl text-primary font-bold">
          Galerija – Naši završeni projekti
        </h1>
        <p className="">
          Pogledajte deo radova koje smo realizovali širom Beograda. Uverite se
          u kvalitet i stil koji pružamo svakom klijentu.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <Image
            src={"/1000002603.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/1000002604.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/1000002605.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/1000002606.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/1000002607.jpg"}
            width={500}
            height={500}
            alt="fasada"
            className="w-full object-cover"
          />
          <Image
            src={"/1000002608.jpg"}
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
