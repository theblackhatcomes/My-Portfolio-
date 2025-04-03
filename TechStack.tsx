'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface TechItem {
  name: string;
  logo: string;
  url: string;
}

const techStack: TechItem[] = [
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    url: 'https://www.python.org/',
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Next.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    url: 'https://nodejs.org/',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'MongoDB',
    logo: 'https://logotyp.us/file/mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Git',
    logo: 'https://i.pinimg.com/736x/a7/f5/78/a7f57841deeefc209c764244c7ab93a1.jpg',
    url: 'https://git-scm.com/',
  },
];

export default function TechStack() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {techStack.map((tech, index) => (
        <motion.a
          key={tech.name}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative w-24 h-24 mb-4 rounded-full bg-secondary p-4 group-hover:bg-secondary/80 transition-colors">
            {!imageErrors[tech.name] ? (
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="object-contain p-2"
                onError={() => handleImageError(tech.name)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-accent">
                {tech.name[0]}
              </div>
            )}
          </div>
          <span className="text-lg font-medium text-center">{tech.name}</span>
        </motion.a>
      ))}
    </div>
  );
} 