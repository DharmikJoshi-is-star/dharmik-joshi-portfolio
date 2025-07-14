"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  githubUrl,
  demoUrl,
  imageUrl,
  technologies,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={title === 'Resume Builder Website'}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors"
          >
            GitHub
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 text-sm font-medium rounded-md transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}