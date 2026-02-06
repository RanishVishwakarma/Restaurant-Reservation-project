import React from "react";
import bgImage from "../assets/hero.jpg";
import line from "../assets/line2.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 -mt-10">
        <img src={line} alt="" className="w-32 sm:w-40 md:w-48 mb-4" />

        <h2 className="text-xs sm:text-sm md:text-lg mb-3 sm:mb-4 tracking-widest uppercase">
          Where Delight Meets Taste
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-6">
          EMERALD BISTRO
        </h1>

        <button
          onClick={() =>
            document
              .getElementById("reservation")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-amber-500 text-black py-2.5 sm:py-3 px-8 sm:px-10 text-sm sm:text-base hover:bg-amber-600 transition"
        >
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
};

export default Hero;
