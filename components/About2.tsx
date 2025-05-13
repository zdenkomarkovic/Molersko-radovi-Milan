"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div className="py-14">
      <h2 className=" container px-2 md:px-4 mx-auto text-3xl font-bold md:text-5xl text-primary flex flex-col  text-center">
        Gips, moleraj, tapete i dekorativne tehnike – majstor Milan Kitanović
        Beograd
      </h2>
      <div className="container px-2 md:px-4 py-10 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-6">
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Dobrodošli na sajt{" "}
            <span className="font-bold text-primary"> Milana Kitanovića</span>,
            pouzdanog i iskusnog majstora iz{" "}
            <span className="font-bold text-primary">Beograda</span>,
            specijalizovanog za{" "}
            <span className="font-bold text-primary">
              gipsarske radove, moleraj, lepljenje tapeta
            </span>
            i primenu raznih{" "}
            <span className="font-bold text-primary">dekorativnih tehnika</span>
            u enterijeru. Ako tražite kvalitetnu i preciznu izradu završnih
            radova u stanu, kući ili poslovnom prostoru – na pravom ste mestu.
            <span className="font-bold text-primary"></span>
          </p>
          <p className=" text-lg md:text-3xl font-bold">
            Usluge koje nudimo na teritoriji Beograda i okoline:
          </p>
          <ul className="text-lg md:text-3xl">
            <li> - Gletovanje i krečenje zidova i plafona</li>
            <li> - Spušteni plafoni, zidne obloge i radovi sa gipsom</li>
            <li> - Profesionalno lepljenje tapeta svih vrsta</li>
            <li>
              - Dekorativne tehnike: travertino, beton efekat, stucco veneziano
              i druge
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/moler.jpg"}
            width={500}
            height={800}
            alt="fasade"
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
      <p className=" container px-2 md:px-4 mx-auto first-letter:pl-6 text-lg md:text-3xl">
        Bilo da renovirate stan, poslovni prostor ili fasadu kuće, Majstor Milan
        garantuje profesionalnu i pouzdanu uslugu, uz poštovanje dogovorenih
        rokova i korišćenje visokokvalitetnih materijala.
      </p>
    </div>
  );
};

export default About2;
