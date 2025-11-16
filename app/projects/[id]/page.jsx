'use client';

import React from "react";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">    
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 mt-20"
    style={{ backgroundColor: "#1c1c22" }}>
      {/* Back Button */}
      <Link
        href="/#projects"
        scroll={true}
        className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
      >
        ⬅ Back
      </Link>

      {/* Title + GitHub button */}
      <div className="flex justify-between items-center mt-8 mb-6">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>

        <a
          href={project.github}
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          GitHub ↗
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-lg max-w-7xl mb-10">{project.description}</p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-10">
        {project.images.map((img, index) => (
          <div key={index} className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
