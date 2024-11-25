"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";

const Courses = () => {
  const courses = [
    {
      category: "Design",
      name: "UX/UI Design 201",
      image: "/All course images/course-image-1.png",
      price: "$400",
      rating: 5.0,
    },
    {
      category: "Programming",
      name: "Introduction to Python",
      image: "/All course images/course-image-2.png",
      price: "$400",
      rating: 5.0,
    },
    {
      category: "Business",
      name: "Data Analysis for Beginners",
      image: "/All course images/course-image-3.png",
      price: "$400",
      rating: 5.0,
    },
    {
      category: "Art",
      name: "Art Specialization",
      image: "/All course images/course-image-4.png",
      price: "$400",
      rating: 5.0,
    },
    {
      category: "Law",
      name: "Rule of Law",
      image: "/All course images/course-image-5.png",
      price: "$400",
      rating: 5.0,
    },
    {
      category: "Tech",
      name: "Introduction to Webflow",
      image: "/All course images/course-image-6.png",
      price: "$400",
      rating: 5.0,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section id="courses" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">Courses</h2>
          <p className="mt-4 text-black">Your Ultimate Guide to learning</p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <button className="px-6 py-3 text-black relative overflow-hidden group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            Popular
          </button>
          <button className="px-6 py-3 text-black relative overflow-hidden group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            Recommended
          </button>
          <button className="px-6 py-3 text-black relative overflow-hidden group">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            Best Price
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-black">{course.category}</span>
                  <div className="flex items-center">
                    <span className="text-[#d9d9d9] text-xl">{<IoStar />}</span>
                    <span className="ml-2 text-sm text-black">
                      {course.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-2 text-black">
                  {course.name}
                </h3>
                <p className="text-black mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="px-4 py-2 bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
                    Enroll Now
                  </button>
                  <span className="text-xl font-semibold text-black ml-2">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center align-center mt-[50px]">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white"
        >
          {showAll ? "Show Less" : "View All Courses"}
        </button>
      </div>
    </section>
  );
};

export default Courses;
