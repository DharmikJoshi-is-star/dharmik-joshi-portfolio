"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample testimonial data - replace with actual testimonials when available
const testimonials = [
  {
    id: 1,
    text: "Dharmik is an exceptional developer who consistently delivers high-quality code. His expertise in Java and backend development is impressive, and he's a valuable asset to any team.",
    author: "John Smith",
    position: "Tech Lead at XYZ Corp",
    image: "/assets/testimonials/person1.jpg" // Placeholder
  },
  {
    id: 2,
    text: "Working with Dharmik was a great experience. His deep knowledge of Spring Boot and microservices architecture helped us modernize our legacy systems efficiently.",
    author: "Emily Johnson",
    position: "Engineering Manager at ABC Tech",
    image: "/assets/testimonials/person2.jpg" // Placeholder
  },
  {
    id: 3,
    text: "Dharmik's problem-solving skills are outstanding. He tackles complex challenges with a structured approach and always comes up with effective solutions.",
    author: "Michael Chen",
    position: "CTO at StartupHub",
    image: "/assets/testimonials/person3.jpg" // Placeholder
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here&apos;s what people are saying about working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Image/Avatar */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">Photo</span>
                  {/* Uncomment when you have actual photos */}
                  {/* <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover rounded-full"
                  /> */}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <svg className="w-12 h-12 text-blue-100 dark:text-blue-900 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-10c0-2.2-1.8-4-4-4h-10zM10 10h10c1.1 0 2 0.9 2 2v10c0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2v-10c0-1.1 0.9-2 2-2z"></path>
                    <path d="M16 15c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                    <path d="M22 15c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
                  </svg>

                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                    {testimonials[activeIndex].text}
                  </p>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[activeIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index
                        ? 'bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* LinkedIn Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to share your experience working with me?
            </p>
            <a
              href="https://www.linkedin.com/in/eng-dj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006397] text-white rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}