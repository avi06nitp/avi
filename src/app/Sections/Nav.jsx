"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/app/Images/menu.png";
import CrossIcon from "@/app/Images/close.png";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-5 md:px-10 lg:px-20">
      <nav className="w-full max-w-7xl my-5 flex items-center justify-between bg-white text-black p-4 shadow-sm rounded-lg">
        <div className="text-xl font-bold">Av!</div>
        <div className="hidden md:flex space-x-6">
          <nav className="flex gap-8">
            <a href="#home" className="hover">
              Experience
            </a>
            <a href="#projects" className="hover">
              Projects{" "}
            </a>
            <a href="#about" className="hover">
              Skills{" "}
            </a>
            <a href="#contact" className="hover">
              Education
            </a>
          </nav>
        </div>

        {/* Hire Me Button */}
        <div className="">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-button"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-black p-3 rounded-full shadow-lg"
          >
            <Image
              src={isMenuOpen ? CrossIcon : Icon}
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
              width={30}
              height={30}
              className="invert"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center md:hidden z-50"
            >
              <div className="flex fixed mb-10 left-1/2 transform -translate-x-1/2 justify-center bg-white text-black p-3 rounded-lg shadow-lg z-20">
                <nav className="flex items-center justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#home"
                    className="hover"
                  >
                    Experience
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#projects"
                    className="hover"
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#about"
                    className="hover"
                  >
                    Skills
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="hover"
                  >
                    Education
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
