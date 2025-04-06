"use client";

import React from "react";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const ContactPage = () => {
  return (
    <div className="w-full h-full p-5 xl:p-10 px-14 font-serif text-left overflow-y-auto bg-[url('/paper-texture.png')] bg-cover">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300">
        Contact Information
      </h1>

      {/* Contact Information */}
      <div className="space-y-6 flex flex-col items-start justify-center mt-10">
        {/* Phone */}
        <div className="flex items-center justify-center gap-4">
          <FaPhone size={24} className="text-blue-600" />
          <a
            href="tel:+919080725679"
            className="text-base sm:text-lg text-gray-800 hover:text-blue-600"
          >
            +91 9080725679
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-4">
          <SiGmail size={24} className="text-blue-600" />
          <a
            href="mailto:kasinathansj@gmail.com"
            className="text-base sm:text-lg text-gray-800 hover:text-blue-600"
          >
            kasinathansj@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-4">
          <IoLocation size={24} className="text-blue-600" />
          <a
            href="https://www.google.com/maps/place/Madurai,+Tamil+Nadu,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-gray-800 hover:text-blue-600"
          >
            Madurai, Tamil Nadu, India
          </a>
        </div>
      </div>
      <div className="mt-10 text-left">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
          Connect with me
        </h2>
        <div className="grid grid-cols-3 gap-6 p-5">
          {siteConfig.socials.map((social) => (
            <Link
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-gray-700 hover:text-blue-600 "
            >
              <social.icon size={24} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 text-left">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
          Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/1YDIbd4tHRpjrH-fLtTvrq8_KDtkQ2JVA/view?usp=sharing"
          download
          className="text-blue-600 hover:text-blue-800 underline text-sm font-medium transition-colors"
        >
          Resume
        </a>
      </div>
      <div className="mt-8 text-left">
        <Footer />
      </div>
    </div>
  );
};
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="flex justify-center items-center py-4 bg-gray-100 mt-12">
      <p className="text-sm text-gray-600 font-light">
        © {currentYear}. Made by{" "}
        <a
          href="https://www.linkedin.com/in/kasinathansj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Kasi Nathan S J
        </a>
        .
      </p>
    </div>
  );
};

export default ContactPage;
