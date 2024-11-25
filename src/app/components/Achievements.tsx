"use client";
import React from "react";

const Achievements = () => {
  const stats = [
    { value: "+200", label: "Courses" },
    { value: "50K", label: "Mentors" },
    { value: "370k", label: "Students" },
    { value: "100+", label: "Recognition" },
  ];

  return (
    <section id="achievements" className="py-14 scroll-mt-20">
      <div className="containerx mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">Our Achievements</h2>
          <p className="mt-4 text-black max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-black">
                {stat.value}
              </span>
              <span className="mt-2 text-black text-[17px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
