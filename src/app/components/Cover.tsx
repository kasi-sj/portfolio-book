"use client";

import React from "react";
import Image from "next/image";

const CoverPage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl flex flex-col items-center justify-center px-6 py-10 text-center">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl italic font-serif text-gray-800 mb-12">
        Portfolio of Kasinathan S J
      </h1>

      {/* Larger Profile Image */}
      <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-gray-200 mb-10">
        <Image
          src="/profile.jpg"
          alt="Author"
          width={288}
          height={288}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Optional Author Label */}
      <span className="text-sm text-gray-500 italic">Author</span>
      <span className="text-sm text-gray-500 italic">Kasinathan S J</span>

      {/* Optional Description */}
      <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl">
        <strong>Full-stack developer</strong> and{" "}
        <strong>competitive programmer</strong> passionate about building
        real-world solutions and solving <strong>algorithmic challenges</strong>
        .
      </p>
    </div>
  );
};

export default CoverPage;
