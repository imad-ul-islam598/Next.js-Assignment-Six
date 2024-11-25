import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import CoursesCategory from './components/CoursesCategory';
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <CoursesCategory />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
