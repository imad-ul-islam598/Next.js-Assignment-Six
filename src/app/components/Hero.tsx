"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center md:flex-row justify-between h-auto md:h-[calc(100vh-80px)] px-6 py-8 pr-0 pl-0 md:py-0 scroll-mt-16"
    >
      <div className="w-full md:w-1/2 md:text-left order-1 md:order-none">
        <h1 className="text-4xl ml-7 md:text-5xl font-bold text-black leading-tight">
          Learn new skills <br /> online with ease
        </h1>
        <p className="text-black ml-7 text-[17px] mt-3">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="mt-7 mb-10 space-x-2 flex justify">
          <button className="bg-black ml-7 text-white px-6 py-3 rounded-md">
            Start learning now
          </button>
          <button className="border border-black ml-7  text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-100">
            Explore Courses
          </button>
        </div>
      </div>

      {/* { Image } */}
      <div className="md:w-1/2 h-full border-black mt-6 md:mt-0 order-2 md:order-none">
        <img
          src="/hero-image.jpg"
          alt="Hero"
          className="h-full w-full object-fill"
        />
      </div>
    </section>
  );
};

export default Hero;
