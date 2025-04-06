"use client";

import React from "react";
import { skills as Skills } from "@/config/site";
import { BadgeCheck } from "lucide-react";
import { IconType } from "react-icons";

type PageSkillsProps = {
  range: "first" | "second";
};

const PageSkills = ({ range }: PageSkillsProps) => {
  const entries = Object.entries(Skills);
  const displayedEntries =
    range === "first" ? entries.slice(0, 3) : entries.slice(3);

  return (
    <div className="w-full h-full p-5 xl:p-10 px-14 font-serif text-left overflow-y-auto bg-[url('/paper-texture.png')] bg-cover">
      <h2 className="text-lg xl:text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300 ">
        Skills
      </h2>
      <div className="space-y-12">
        {displayedEntries.map(([category, skills]) => {
          const chunkedSkills: { name: string; icon: IconType }[][] = [];
          for (let i = 0; i < skills.list.length; i += 3) {
            chunkedSkills.push(skills.list.slice(i, i + 3));
          }

          return (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 capitalize border-l-4 border-blue-400 pl-3">
                {skills.title.replace(/-/g, " ")}
              </h3>
              {/* Styled Description */}
              {skills.description && (
                <p className="text-sm italic text-gray-600 mb-4 pl-3 border-l-[3px] border-gray-300 ml-1">
                  {skills.description}
                </p>
              )}
              <div className="grid grid-cols-2 grid-cols-3 gap-6">
                {chunkedSkills.map((chunk, index) => (
                  <ul key={index} className="space-y-2">
                    {chunk.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <skill.icon size={14} className="text-blue-600" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageSkills;
