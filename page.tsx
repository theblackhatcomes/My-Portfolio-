'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import TypingName from './components/TypingName';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TypingName />
            </motion.div>
            <div className="flex space-x-8">
              {['About', 'Services', 'Projects', 'Tech Stack'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold mb-6">
                Oussama Hmoute
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Software engineer &Full Stack Developer & Creative Problem Solver
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiGithub className="inline-block mr-2" />
                  GitHub
                </a>
                <a href="www.linkedin.com/in/oussama-hmoute-a8047b28a" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FiLinkedin className="inline-block mr-2" />
                  LinkedIn
                </a>
                <a href="mailto:oussamahmoutecrypto@gmail.com" className="btn-primary">
                  <FiMail className="inline-block mr-2" />
                  Contact
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477"
                alt="Oussama Hmoute"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            I'm a passionate Software engineering student with expertise in building modern web applications.
            I specialize in creating responsive, user-friendly interfaces and robust backend systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-300">Im a passionate software engineering student in the national school of applied science of Al Hoceima in Morocco , with a competitive mindset and a determination to make the impossible</p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <p className="text-gray-300">Your experience details here</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FiCode}
            title="Web Development"
            description="Building modern, responsive websites and web applications using the latest technologies."
          />
          <ServiceCard
            icon={FiServer}
            title="Backend Development"
            description="Creating robust and scalable backend systems with Node.js, Python, and more."
          />
          <ServiceCard
            icon={FiSearch}
            title="SEO Optimization"
            description="Improving website visibility and ranking through effective SEO strategies."
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Graphy"
            description="Graphy is a versatile and lightweight graph visualization tool designed to help users easily create, analyze, and visualize various types of graphs and functions. Built using Python, this project focuses on intuitive interactivity, customizable styles, and efficient graph rendering ."
            image="https://i.sstatic.net/ASFIj.png"
            tags={['Matplotlib', 'sympy', 'Tkinter']}
            githubUrl="https://github.com/theblackhatcomes/Graphy"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="TradePocket"
            description=" A Revolutionary Real-Time Trading Platform! A cutting-edge trading interface that combines professional-grade analytics with an intuitive user experience."
            image="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt72fd7e2f49314810/66a2cbed96250195d7b51cb9/TT1763_LP03_PLAT_01-noshadow.png?format=pjpg&auto=webp&quality=80&width=1000&disable=upscale"
            tags={['Next.js', 'TypeScript', 'Tailwind']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Project 3"
            description="Showcase your third project with relevant technologies and features."
            image="/project3.jpg"
            tags={['Python', 'Django', 'PostgreSQL']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech-stack" title="Tech Stack">
        <TechStack />
      </Section>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Oussama Hmoute. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 