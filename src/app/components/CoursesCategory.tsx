"use client";
import React from "react";

const CoursesCategory = () => {
  const courses = [
    {
      name: "Design & Development",
      icon: "/category-courses-images/course-image1.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Marketing",
      icon: "/category-courses-images/course-image2.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Development",
      icon: "/category-courses-images/course-image3.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Communication",
      icon: "/category-courses-images/course-image4.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Digital Marketing",
      icon: "/category-courses-images/course-image5.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Self Development",
      icon: "/category-courses-images/course-image6.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Business",
      icon: "/category-courses-images/course-image7.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Finance",
      icon: "/category-courses-images/course-image8.svg",
      description: "50+ Courses Available",
    },
    {
      name: "Consulting",
      icon: "/category-courses-images/course-image9.svg",
      description: "50+ Courses Available",
    },
  ];

  return (
    <section id="coursecategory" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-3">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">
            Explore Courses By Category
          </h2>
          <p className="mt-4 text-[18px] align-center text-black">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-4 bg-[#f7f7f7] shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-4 max-h-[120px]"
            >
              <img
                src={course.icon}
                alt={`${course.name} icon`}
                className="w-20 h-20 bg-white"
              />
              <div>
                <h3 className="text-1xl font-semibold text-black">
                  {course.name}
                </h3>
                <p className="text-black">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCategory;
