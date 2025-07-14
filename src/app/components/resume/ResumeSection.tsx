"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// Example skills data - these should match the skills in your resume
const skills = [
  { id: 1, name: 'Java', category: 'Languages' },
  { id: 2, name: 'Spring Boot', category: 'Frameworks' },
  { id: 3, name: 'Redis', category: 'Databases' },
  { id: 4, name: 'MongoDB', category: 'Databases' },
  { id: 5, name: 'AWS', category: 'Cloud' },
  { id: 6, name: 'Microservices', category: 'Architecture' },
  { id: 7, name: 'Docker', category: 'DevOps' },
  { id: 8, name: 'REST API', category: 'Web Development' },
  { id: 9, name: 'Maven', category: 'Build Tools' },
  { id: 10, name: 'Git', category: 'Version Control' },
];

// Get unique categories
const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function ResumeSection() {
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter skills based on selected category
  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  const toggleSkill = (skillId: number) => {
    setSelectedSkills(prev =>
      prev.includes(skillId)
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  // Use a placeholder PDF URL for now - you'll need to replace this with your actual resume

  return (
    <section id="resume" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            View and download my resume to learn more about my professional experience, skills, and qualifications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills Filter Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Filter by Category:</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1 text-xs rounded-full ${
                      selectedCategory === null
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-xs rounded-full ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      selectedSkills.includes(skill.id)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
              
              {/* Job Experience Summary */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Experience Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <a href="https://www.getshopse.com/" target="_blank" rel="noopener noreferrer" className="w-20 h-20 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/assets/companies/shopse-logo.svg" 
                        alt="ShopSe Logo" 
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                      />
                    </a>
                    <div>
                      <h4 className="font-medium">SDE-2 (Senior Software Engineer)</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://www.getshopse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">ShopSe</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <a href="https://www.newfold.com/" target="_blank" rel="noopener noreferrer" className="w-20 h-20 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/assets/companies/newfold-logo.svg" 
                        alt="Newfold Digital Logo" 
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                      />
                    </a>
                    <div>
                      <h4 className="font-medium">Software Engineer</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://www.newfold.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Newfold Digital</a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <a href="https://www.paynav.co/" target="_blank" rel="noopener noreferrer" className="w-20 h-20 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow">
                      <img 
                        src="/assets/companies/paynav-logo.png" 
                        alt="PayNav Logo" 
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "90%", maxHeight: "90%" }}
                      />
                    </a>
                    <div>
                      <h4 className="font-medium">Software Engineer</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://www.paynav.co/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">PayNav</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Resume Viewer Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-center mb-6 text-gray-500 dark:text-gray-400">
                For now, we&apos;re displaying a placeholder for the resume. You&apos;ll need to add your actual resume PDF to the public folder.
              </p>
              <div className="flex justify-center mb-4">
                <a
                  href="/Dharmik_Resume.pdf"
                  download="Dharmik_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}