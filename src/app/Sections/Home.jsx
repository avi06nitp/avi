"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export const Header = () => {
  return (
    <section className="lg:py-20 mx-20">
        <div className="text-white">
      <h1 className="md:mt-15 sm:text-4xl md:text-8xl md:text-16xl">Hello, I'm</h1>
      <TypeAnimation
              sequence={["Avinash Singh", 1000, "Software Engineer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>


    </section>
  );
};
