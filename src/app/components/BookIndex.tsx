"use client";
import React from "react";

interface BookIndexProps {
  jumpToPage: (pageIndex: number) => void;
}

const BookIndex: React.FC<BookIndexProps> = ({ jumpToPage }) => {
  // Note: These page numbers reflect the flipbook order:
  // Cover: page 0, Index: page 1, Home/About: page 2, etc.
  const pages = [
    { page: 3, label: "About", title: "🏠 Home" },
    { page: 4, label: "Skills", title: "💡 Skills" },
    {
      page: 6,
      label: "Projects",
      title: "🛠️💻 Projects",
      childrens: [
        { page: 6, label: "Project #1", title: "PetitAI" },
        { page: 7, label: "Project #2", title: "LinkedIn Mobile Clone" },
        { page: 8, label: "Project #3", title: "TrackMe" },
        { page: 9, label: "Project #4", title: "CodeSync" },
        { page: 10, label: "Project #5", title: "JobMagnet" },
      ],
    },
    { page: 11, label: "Education", title: "🎓📚 Educations" },
    { page: 12, label: "Experience", title: "💼🛠️ Experiences" },
    { page: 13, label: "Achievements", title: "🏆🌟 Achievements" },
    { page: 15, label: "Certifications", title: "📜 Certifications" },
    { page: 18, label: "Contact", title: "📞✉️ Contact" },
  ];

  return (
    <section
      id="home"
      className="relative flex text-left flex-col items-start w-full px-6 sm:px-10 md:px-20 overflow-y-auto py-10"
    >
      {/* About Me Section */}
      <div className="max-w-3xl ">
        {/* About Me Section */}
        <div className="text-left max-w-2xl mx-auto">
          <h2 className="text-xl  font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
            Table of Contents
          </h2>
        </div>
      </div>
      {/* Table of Contents List */}
      <ul className="space-y-2 w-full mt-10">
        {pages.map((p) => (
          <div className="w-full" key={p.page}>
            <li
              className="flex items-center justify-between text-lg  w-full cursor-pointer"
              onClick={() => jumpToPage(p.page)}
            >
              {/* Label on the left */}
              <span className="text-gray-800 w-1/2">{p.title}</span>

              {/* Dotted line in the middle */}
              <span className="border-b border-dotted border-gray-400 flex-1 mx-2" />

              {/* Page number on the right */}
              <span className="text-gray-800 w-12 text-right">
                {p.page}
              </span>
            </li>
            {/* Render sub-list if exists */}
            {p.childrens && p.childrens.length > 0 && (
              <ul className="ml-6  space-y-1 my-3 text-base text-gray-600">
                {p.childrens.map((child) => (
                  <li
                    key={child.page}
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => jumpToPage(child.page)}
                  >
                    <span className="w-1/2">{child.title}</span>
                    <span className="border-b border-dotted border-gray-400 flex-1 mx-2" />
                    <span className="w-12 text-right">{child.page}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default BookIndex;
