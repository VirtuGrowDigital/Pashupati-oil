import React from "react";

import img1 from "../assets/imgabout1.png";
import img2 from "../assets/imgabout2.png";
import img3 from "../assets/imgabout3.png";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center mt-24 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <p className="italic text-yellow-400 text-lg">A Bit</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            ABOUT <span className="text-white">US</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-lg">
            At Pashupati Food, we pride ourselves on delivering top-notch edible
            oils and rice, resulting in increased customer loyalty and
            satisfaction for our clients across the food sector.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-lg">
            With an unwavering commitment to quality and authenticity, Pashupati
            Food has transformed the sourcing of edible oils and rice for
            numerous businesses. Our premium products not only ensure customer
            satisfaction but also enhance the overall culinary experience,
            making us a preferred wholesaler in the market.
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Know More →
          </button>
        </div>

        {/* Right Content (Images aligned like screenshot) */}
        <div className="flex-1 grid grid-cols-2 gap-6 items-start">
          {/* Left tall image */}
          <img
            src={img1}
            alt="About 1"
            className="w-52 md:w-64 rounded-xl shadow-lg col-span-1"
          />

          {/* Right side stacked images */}
          <div className="flex flex-col gap-6 mt-12">
            <img
              src={img2}
              alt="About 2"
              className="w-52 md:w-64 rounded-xl shadow-lg"
            />
            <img
              src={img3}
              alt="About 3"
              className="w-52 md:w-64 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
