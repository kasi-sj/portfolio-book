import React from "react";

const experienceData = [
  {
    role: "Intern Configuration Engineer",
    duration: "Oct 2024 - Present · 7 months",
    company: "Lavendel Consulting",
    location: "💻 Remote · Groovy & Pricefx Configuration",
    color: "green",
  },
];

const PageExperience = () => {
  return (
    <div className=" w-full">
      <div className="w-full min-h-screen p-10 px-14 text-left font-serif">
        {/* Experience Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300">
          Experience
        </h2>
        <div className="flex flex-col items-start justify-start pt-10">
          <div className="border-l-3 ml-6 border-green-500">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className={`relative mb-12 ml-6 ${index === experienceData.length - 1 ? "" : "border-b"}`}
              >
                <div
                  className={`absolute w-3 h-3 bg-${experience.color}-600 rounded-full -left-8 top-8.5`}
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {experience.role}
                </h3>
                <p className="text-sm text-gray-600 italic">{experience.duration}</p>
                <p className="text-base text-gray-700">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageExperience;
