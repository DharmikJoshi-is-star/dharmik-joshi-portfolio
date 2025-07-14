"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Project data based on the GitHub repositories you shared
const projectsData = [
  {
    id: 1,
    title: 'Resume Builder Website',
    description: 'A full-featured resume builder application that helps users create professional resumes with customizable templates and export options.',
    githubUrl: 'https://github.com/DharmikJoshi-is-star/Resume-Builder-Website',
    demoUrl: 'https://www.youtube.com/@dharmikjoshi1055',
    imageUrl: '/projects/resume-builder.jpg', // Will need to be added to public folder
    technologies: ['Java', 'Spring Boot', 'JSP', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'ShowMe',
    description: 'A media showcase platform for displaying and sharing content with intuitive user experience and responsive design.',
    githubUrl: 'https://github.com/DharmikJoshi-is-star/ShowMe',
    imageUrl: '/projects/showme.jpg', // Will need to be added to public folder
    technologies: ['Java', 'Spring Boot', 'RESTful API', 'Database Design'],
  },
  {
    id: 3,
    title: 'Student Attendance Management',
    description: 'An automated system for tracking and managing student attendance in academic institutions. Features dashboard analytics, NFC-based attendance marking, subject management, and comprehensive reporting capabilities.',
    githubUrl: 'https://github.com/DharmikJoshi-is-star/Student-attendance-Management',
    imageUrl: '/projects/attendance.jpg',
    technologies: ['Java', 'Database', 'NFC Integration', 'Dashboard Analytics', 'Web Development'],
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projectsData.filter((project) =>
        project.technologies.includes(filter)
      )
    : projectsData;

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and experience in Java backend development and more.
          </p>
        </motion.div>

        {/* Technology filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
        
        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects match the selected filter.
            </p>
            <button
              onClick={() => setFilter(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/DharmikJoshi-is-star"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}