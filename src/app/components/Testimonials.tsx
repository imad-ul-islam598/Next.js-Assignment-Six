"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonialsData = [
  {
    name: "James Nduku",
    position: "Software Developer",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    img: "/Team section assets/team-member-3.svg",
  },
  {
    name: "Erick Kipkemboi",
    position: "Scrum Master",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    img: "/Team section assets/team-member-1.svg",
  },
  {
    name: "Stephen Kerubo",
    position: "UI/UX Designer",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    img: "/Team section assets/team-member-6.svg",
  },
  {
    name: "Alice Doe",
    position: "Project Manager",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    img: "/Team section assets/team-member-5.svg",
  },
  {
    name: "John Smith",
    position: "Data Analyst",
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    img: "/Team section assets/team-member-4.svg",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3); // 1 for small screens, 3 for larger screens
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsToShow < testimonialsData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-[#f7f7f7] py-[112px] px-[32px] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-10">
          <h2 className="text-[32px] md:text-[45px] font-bold text-black">
            Customer Testimonials
          </h2>
          <p className="text-[15px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          {/* Cards Container */}
          <div
            className={`grid ${
              itemsToShow === 1 ? "grid-cols-1" : "grid-cols-3"
            } gap-5`}
          >
            {testimonialsData
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((testimonial, index) => (
                <div key={index} className="border border-black p-6 mx-auto">
                  <div className="flex justify-start mb-4">
                    <span className="text-black font-bold text-xl gap-1">
                      {testimonial.rating}
                    </span>
                  </div>
                  <p className="mb-6">"{testimonial.feedback}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-black font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Dots Section */}
          <div className="absolute bottom-[-40px] left-0 flex space-x-2">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index >= currentIndex && index < currentIndex + itemsToShow
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          {/* Arrows Section */}
          <div className="absolute bottom-[-60px] right-0 flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiArrowLeft size={20} className="text-black" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsToShow >= testimonialsData.length}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiArrowRight size={20} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
