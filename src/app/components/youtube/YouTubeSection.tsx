"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// This would typically come from a YouTube API call
const videosData = [
  {
    id: '1',
    title: 'Attendance Management System for Academic Sector',
    videoId: '1ku8lNU-cB8',
    thumbnail: '/projects/video-thumbnail-1.jpg', // Placeholder thumbnail
  },
  {
    id: '2',
    title: 'Time Table Generator',
    videoId: 'rYfbjqZd7Mg',
    thumbnail: '/projects/video-thumbnail-2.jpg', // Placeholder thumbnail
  }
];

export default function YouTubeSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>('1ku8lNU-cB8'); // Default to Attendance Management System video
  const playerRef = useRef<HTMLDivElement>(null);

  const handleVideoSelect = (videoId: string) => {
    setActiveVideoId(videoId);
    
    // Scroll to player if on mobile
    if (window.innerWidth < 768 && playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="youtube" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Demonstrations</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Watch demonstrations of my academic projects, focusing on attendance management and timetable generation systems.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3 order-2 lg:order-1"
            ref={playerRef}
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              {activeVideoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Select a video to play</p>
                    <a 
                      href="https://www.youtube.com/@dharmikjoshi1055" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Visit My Channel
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Video List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/3 order-1 lg:order-2"
          >
            <div className="space-y-4">
              {videosData.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => handleVideoSelect(video.videoId)}
                  className={`cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-all ${
                    activeVideoId === video.videoId 
                      ? 'ring-2 ring-blue-500 transform scale-[1.02]' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{video.title}</span>
                      {/* YouTube video thumbnails can be dynamically loaded using the video ID */}
                      {video.videoId && (
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to medium quality if maxres isn't available
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">{video.title}</h4>
                  </div>
                </div>
              ))}

              <a 
                href="https://www.youtube.com/@dharmikjoshi1055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors"
              >
                Visit My YouTube Channel
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}