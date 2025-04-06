import React from "react";

const educationData = [
  {
    level: "Primary School",
    years: "2009 - 2013",
    school: "Harvey Primary School",
    location: "Kamarajar Salai, Madurai, Tamil Nadu - 625009",
    color: "blue",
  },
  {
    level: "High School",
    years: "2014 - 2020",
    school: "Thiagarajar Model Higher Secondary School",
    location: "Teppakulam, Madurai, Tamil Nadu - 625009",
    color: "blue",
  },
  {
    level: "College",
    years: "2020 - 2025",
    school: "PSNA College of Engineering and Technology",
    degree: "BE in Computer Science",
    location: "Kothandaraman Nagar, Tamil Nadu - 624622",
    color: "blue",
  },
];

const PageEducation = () => {
  return (
    <div>
      <div className="w-full min-h-screen p-10 px-14 text-left font-serif">
        {/* Education Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300">
          Education
        </h2>
        <div className="flex flex-col items-start justify-start pt-10">
          <div className="border-l-3 ml-6 border-blue-500">
            {educationData.map((education, index) => (
              <div
                key={index}
                className={`relative mb-12 ml-6 ${index === educationData.length - 1 ? '' : 'border-b'}`}
              >
                <div
                  className={`absolute w-3 h-3 bg-${education.color}-600 rounded-full -left-8 top-8.5`}
                />
                <h3 className="text-lg font-semibold text-gray-800">{education.level}</h3>
                <p className="text-sm text-gray-600 italic">{education.years}</p>
                <p className="text-base text-gray-700">{education.school}</p>
                {education.degree && (
                  <p className="text-base text-gray-700">{education.degree}</p>
                )}
                <p className="text-sm text-gray-500">{education.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEducation;
