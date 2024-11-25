"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Media Icons
import Link from "next/link";

const Team = () => {
  const teamMembers = [
    {
      name: "James Nukuu",
      position: "Marketing Coordinator",
      img: "/Team section assets/team-member-1.svg",
    },
    {
      name: "Joseph Munyambu",
      position: "Nursing Assistant",
      img: "/Team section assets/team-member-2.svg",
    },
    {
      name: "Joseph Ngumbau",
      position: "Medical Assistant",
      img: "/Team section assets/team-member-3.svg",
    },
    {
      name: "Erick Kipkemboi",
      position: "Web Designer",
      img: "/Team section assets/team-member-4.svg",
    },
    {
      name: "Stephen Kerubo",
      position: "President of Sales",
      img: "/Team section assets/team-member-5.svg",
    },
    {
      name: "John Leboo",
      position: "Dog Trainer",
      img: "/Team section assets/team-member-6.svg",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our team</h2>
        <p className="text-black mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className={`p-6`}>
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-black">{member.position}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="#" className="text-black">
                  <FaLinkedin size={20} />
                </Link>
                <Link href="#" className="text-black">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="text-black">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
