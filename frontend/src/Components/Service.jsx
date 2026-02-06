import React from "react";
import img1 from "../assets/break.jpg";
import img2 from "../assets/app.jpg";
import img3 from "../assets/serv3.jpg";
import line from "../assets/line.png";

const Service = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-black text-white flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

          {/* Breakfast */}
          <div className="text-center md:text-right">
            <img
              src={line}
              alt=""
              className="
                mb-4 opacity-70
                w-16 sm:w-20 md:w-24 lg:w-28
                mx-auto
                md:ml-auto md:mr-0
              "
            />
            <h2 className="text-amber-400 text-3xl font-semibold tracking-wide">
              Breakfast
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:ml-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img
              src={img1}
              alt="Breakfast"
              className="mt-10 w-full h-72 object-cover"
            />
          </div>

          {/* Drinks */}
          <div className="text-center">
            <div className="h-80 flex items-center justify-center mb-10">
              <img
                src={img3}
                alt="Drinks"
                className="h-full object-contain"
              />
            </div>

            <img
              src={line}
              alt=""
              className="
                mx-auto mb-4 opacity-70
                w-16 sm:w-20 md:w-24 lg:w-28
              "
            />
            <h2 className="text-amber-400 text-3xl font-semibold tracking-wide">
              Drinks
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Appetizers */}
          <div className="text-center md:text-left">
            <img
              src={line}
              alt=""
              className="
                mb-4 opacity-70
                w-16 sm:w-20 md:w-24 lg:w-28
                mx-auto
                md:mr-auto md:ml-0
              "
            />
            <h2 className="text-amber-400 text-3xl font-semibold tracking-wide">
              Appetizers
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mr-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img
              src={img2}
              alt="Appetizers"
              className="mt-10 w-full h-72 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
