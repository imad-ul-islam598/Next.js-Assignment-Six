"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#676767]">
      {/* Top Information Bar */}
      <div className="bg-[#f7f7f7] hidden md:flex text-sm py-3 px-4 lg:px-12 justify-between items-center border-b border-black">
        {/* Contact Info */}
        <div className="flex items-center space-x-4 text-sm text-black">
          <span className="tracking-wide border-r border-black pr-6">
            Phone: 956 742 455 678
          </span>
          <span className="tracking-wide">Email: info@ddsgnr.com</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-black">
          <Link
            href="#"
            aria-label="Facebook"
            className="hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center bg-[#f7f7f7] justify-between px-6 py-4">
        <img src="/nav-logo.png" alt="Logo" className="h-10 w-auto" />
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenu size={28} />
            )}
          </button>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 p-3 bg-white text-black">
          <li>
            <Link
              href="#home"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#courses"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="#coursecategory"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#achievements"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              Achievement
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="hover:border-b-2 hover:border-black pb-1 transition-all"
            >
              Testimonial
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-[#f7f7f7] text-black">
          <li>
            <Link
              href="#home"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#courses"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="#coursecategory"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#achievements"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              Achievement
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#testimonials"
              className="block text-black hover:border-b-2 hover:border-black pb-1"
            >
              Testimonial
            </Link>
          </li>
          <div className="flex flex-col space-y-2">
            <button className="text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black">
              Sign Up
            </button>
          </div>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
