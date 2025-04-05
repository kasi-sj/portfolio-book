"use client";

import React from "react";
import { projects } from "@/config/site";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type PageProjectsProps = {
  page: number; // 1-based index
};

const PageProjects = ({ page }: PageProjectsProps) => {
  const itemsPerPage = 1;
  const startIndex = (page - 1) * itemsPerPage;
  const project = projects[startIndex];

  if (!project) return null;

  return (
    <div className="w-full h-full p-10 px-14 font-serif text-left overflow-y-auto bg-[url('/paper-texture.png')] bg-cover">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300 ">
        Project #{page}
      </h2>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-6">
          {/* Title + Links */}
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-500 underline decoration-gray-400 underline-offset-4">
              {project.title}
            </h3>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
              >
                <ExternalLink size={16} /> Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline flex items-center gap-1 text-sm"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>

          {/* Image */}
          {project.image && (
            <div className="border rounded-2xl overflow-hidden shadow-sm w-full max-w-xl">
              <Image
                src={project.image}
                width={800}
                height={450}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-800 italic">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.icons.map((Icon, index) => (
                <div
                  key={index}
                  title="Tech"
                  className="text-xl text-gray-700 hover:text-blue-600 transition"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProjects;
