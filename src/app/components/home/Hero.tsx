"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="inline-block">Hi, I&apos;m</span>
            <span className="text-blue-500 inline-block ml-2">Dharmik Joshi</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
            Senior Java Backend Developer
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Building robust and scalable backend systems with Java, Spring Boot, and Microservices. 
            Passionate about creating efficient solutions for complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="#resume"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 text-center"
            >
              View Resume
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-900/20 font-medium rounded-full transition-colors duration-300 text-center"
            >
              Contact Me
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['Java', 'Spring Boot', 'Redis', 'Docker', 'AWS', 'MongoDB'].map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile Image/Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image 
              src="/assets/profile/dharmik-profile.jpg" 
              alt="Dharmik Joshi" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
              style={{ opacity: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}