"use client";

import React from "react";
import { achievements } from "@/config/site"; // Assuming you have the achievements array in this file
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type PageAchievementsProps = {
  page: number; // 1-based index
};

const PageAchievements = ({ page }: PageAchievementsProps) => {
  const itemsPerPage = 2; // Display two achievements per page
  const startIndex = (page - 1) * itemsPerPage;
  const achievementsForPage = achievements.slice(startIndex, startIndex + itemsPerPage);

  if (achievementsForPage.length === 0) return null; // Return null if no achievements exist for this page

  return (
    <div className="w-full h-full p-10 px-14 font-serif text-left overflow-y-auto  bg-cover">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300">
        Achievements
      </h2>
      <div className="max-w-4xl mx-auto space-y-5">
        {achievementsForPage.map((achievement, index) => (
          <div key={index} className="space-y-3">
            {/* Achievement Title + Genre */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={achievement.image}
                  width={100}
                  height={100}
                  alt={`${achievement.genere} logo`}
                  className="w-30 h-30 object-contain"
                />
                <h3 className="text-lg font-semibold text-blue-900 underline decoration-blue-400 underline-offset-4">
                  {achievement.genere}
                </h3>
              </div>
            </div>

            {/* Points List */}
            <div className="space-y-2">
              {achievement.points.map((point, index) => (
                <p key={index} className="text-sm text-gray-800 italic">
                  {point}
                </p>
              ))}
            </div>

            {/* View Profile Link */}
            {achievement.link && (
              <div className="mt-4">
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={16} /> View Profile
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageAchievements;
