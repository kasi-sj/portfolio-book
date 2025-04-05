"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Code, MonitorSmartphone, Share2, Smartphone } from "lucide-react";
import { ExternalLink } from "lucide-react"; // Make sure this import is at the top

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center w-full px-6 sm:px-10 md:px-20 overflow-y-auto py-10"
    >
      {/* About Me Section */}
      <div className="max-w-3xl text-center">
        {/* About Me Section */}
        <div className="text-left max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
            Hi, I’m Kasinathan S J, a competitive programmer with a keen
            interest in web development. I have strong skills in Java and
            JavaScript programming languages. My passion for coding has led me
            to explore various domains of computer science.
            <br />
            <br />
            I&apos;m always eager to learn new technologies and apply them to
            real-world problems. Currently, I’m seeking opportunities to work on
            challenging projects that help me grow as a developer.
          </p>
        </div>

        {/* Area of Interests Section */}
        <div className="mt-10 text-left max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Area of Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3">
              <MonitorSmartphone className="text-blue-600" size={20} />
              <span className="text-gray-700 text-sm font-medium">
                Web Development
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="text-green-600" size={20} />
              <span className="text-gray-700 text-sm font-medium">
                Mobile Development
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="text-purple-600" size={20} />
              <span className="text-gray-700 text-sm font-medium">
                Competitive Programming
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Share2 className="text-red-600" size={20} />
              <span className="text-gray-700 text-sm font-medium">
                System Design
              </span>
            </div>
          </div>
        </div>
        {/* Social Links Section */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Connect with me
          </h2>
          <div className="flex justify-start gap-6">
            {siteConfig.socials.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-gray-700 hover:text-blue-600"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-8 text-left">
          <a
            href="https://drive.google.com/file/d/1YDIbd4tHRpjrH-fLtTvrq8_KDtkQ2JVA/view?usp=sharing"
            download
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline text-sm font-medium transition-colors"
          >
            Resume
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
