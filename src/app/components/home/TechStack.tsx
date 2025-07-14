"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoItemProps {
  name: string;
  imageUrl?: string;
  websiteUrl?: string;
}

// Function to create simple logo component
const LogoItem = ({ name, imageUrl, websiteUrl }: LogoItemProps) => {
  const logoContent = (
    <>
      <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={`${name} logo`}
            width={80}
            height={80}
            className="object-contain"
            style={{ 
              maxWidth: "90%", 
              maxHeight: "90%"
            }}
            priority={name === "ShopSe" || name === "Newfold Digital"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md">
            <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{name}</p>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-transform hover:scale-105">
      {websiteUrl ? (
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full">
          {logoContent}
        </a>
      ) : (
        logoContent
      )}
    </div>
  );
};

export default function TechStack() {
  const companies = [
    { name: "ShopSe", imageUrl: "/assets/companies/shopse-logo.svg", websiteUrl: "https://www.getshopse.com/" },
    { name: "Newfold Digital", imageUrl: "/assets/companies/newfold-logo.svg", websiteUrl: "https://www.newfold.com/" },
    { name: "PayNav", imageUrl: "/assets/companies/paynav-logo.png", websiteUrl: "https://www.paynav.co/" },
  ];

  const technologies = [
    { name: "Java", imageUrl: "/assets/logos/tech/java.png" },
    { name: "Spring Boot", imageUrl: "/assets/logos/tech/spring-boot.png" },
    { name: "Redis", imageUrl: "/assets/logos/tech/redis.png" },
    { name: "Docker", imageUrl: "/assets/logos/tech/docker.png" },
    { name: "AWS", imageUrl: "/assets/logos/tech/aws.png" },
    { name: "MongoDB", imageUrl: "/assets/logos/tech/mongodb.png" },
    { name: "MySQL", imageUrl: "/assets/logos/tech/mysql.png" },
    { name: "Git", imageUrl: "/assets/logos/tech/git.png" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LogoItem name={company.name} imageUrl={company.imageUrl} websiteUrl={company.websiteUrl} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <LogoItem name={tech.name} imageUrl={tech.imageUrl} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}