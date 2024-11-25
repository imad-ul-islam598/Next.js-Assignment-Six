"use client";
import React from "react";
import Image from "next/image";
const Companies: React.FC = () => {
  return (
    <section className="bg-[#F7F7F7] py-12 px-6 md:px-12">
      {/* Desktop/Tablet - Heading and Static Logos in Same Line */}
      <div className="hidden md:flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-black">
          Trusted by 2000+ companies worldwide
        </h2>
        <div className="grid grid-cols-6 gap-6 w-2/3">
          <Image
            src="/companies-logos/company-logo1.svg"
            alt="Company Logo 1"
            height={38} 
            width={123} 
            className="mx-auto"
          />
          <Image
            src="/companies-logos/company-logo2.svg"
            alt="Company Logo 2"
            height={38} 
            width={123} 
            className="mx-auto"
          />
          <Image
            src="/companies-logos/company-logo3.svg"
            alt="Company Logo 3"
            height={38} 
            width={123} 
            className="mx-auto"
          />
          <Image
            src="/companies-logos/company-logo4.svg"
            alt="Company Logo 4"
            height={38} 
            width={123} 
            className="mx-auto"
          />
          <Image
            src="/companies-logos/company-logo5.svg"
            alt="Company Logo 5"
            height={38} 
            width={123} 
            className="mx-auto"
          />
          <Image
            src="/companies-logos/company-logo6.svg"
            alt="Company Logo 6"
            height={38} 
            width={123} 
            className="mx-auto"
          />
        </div>
      </div>

      {/* Mobile - Heading Above Animated Logos */}
      <div className="md:hidden">
        <h2 className="text-[18px] font-bold text-black mb-6">
          Trusted by the world's best companies <br />
          [social proof to build credibility]
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6"
            style={{
              animation: "scroll 15s linear infinite",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            <Image
              src="/companies-logos/company-logo1.svg"
              alt="Company Logo 1"
              height={38} 
              width={123} 
              className="mx-auto"
            />
            <Image
              src="/companies-logos/company-logo2.svg"
              alt="Company Logo 2"
              height={38} 
              width={123} 
              className="mx-auto"
            />
            <Image
              src="/companies-logos/company-logo3.svg"
              alt="Company Logo 3"
              height={38} 
              width={123} 
              className="mx-auto"
            />
            <Image
              src="/companies-logos/company-logo4.svg"
              alt="Company Logo 4"
              height={38} 
              width={123} 
              className="mx-auto"
            />
            <Image
              src="/companies-logos/company-logo5.svg"
              alt="Company Logo 5"
              height={38} 
              width={123} 
              className="mx-auto"
            />
            <Image
              src="/companies-logos/company-logo6.svg"
              alt="Company Logo 6"
              height={38} 
              width={123} 
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Inline Keyframes for Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Companies;
