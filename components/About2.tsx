"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Molersko-farbarski radovi
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            <span className="font-bold text-primary">Majstor Laslo</span> je
            iskusni moler i farbar koji svojim dugogodišnjim radom pruža
            visokokvalitetne usluge u uređenju i renoviranju unutrašnjih i
            spoljašnjih zidnih površina. Njegov rad karakterišu{" "}
            <span className="font-bold text-primary">
              preciznost, pedantnost i posvećenost detaljima
            </span>{" "}
            , čime osigurava besprekorne rezultate koji traju dugi niz godina.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Bilo da renovirate stan, poslovni prostor ili fasadu kuće, Majstor
            Laslo garantuje profesionalnu i pouzdanu uslugu, uz poštovanje
            dogovorenih rokova i korišćenje visokokvalitetnih materijala.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Ako želite kvalitetne, precizne i dugotrajne molersko-farbarske
            radove, pozovite Majstora Lasla i zakažite besplatnu procenu!
          </p>
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
    </div>
  );
};

export default About2;
