import React from "react";
import bottle from "../assets/bottle.png"; // your bottle image
import heroBg from "../assets/Rectangle 1.png"; // gradient bg image

const Hero = () => {
  return (
    <section
      className="w-full rounded-3xl shadow-lg mt-24 px-6 md:px-16 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="flex-1 text-white space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-snug"style={{ fontFamily: "Manjari, sans-serif" }}>
          राजस्थान के चुनिंदा खेतों से आपकी रसोई तक
        </h2>

        <p className="text-sm font-extralight sm:text-base md:text-xl text-gray-200 leading-relaxed max-w-lg">
          Pashupati Food brings you pure wood-pressed mustard oil, crafted
          through traditional methods that preserve nutrients, aroma, and
          authentic taste.
        </p>

        <div className="flex space-x-4 sm:space-x-6 pt-6">
          <button className="bg-white text-black text-sm sm:text-base md:text-lg font-extralight px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg shadow hover:bg-gray-200 transition">
            Explore More
          </button>
          <button className="bg-white/10 text-white text-sm sm:text-base md:text-lg font-extralight px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg shadow hover:bg-green-700 transition">
            Whatsapp Enquiry
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 relative flex flex-col items-center mt-12 md:mt-0">
        

        <img
          src={bottle}
          alt="Mustard Oil Bottle"
          className="w-48 sm:w-64 md:w-96 lg:w-[28rem] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
