import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    title: 'Delivery application',
    description: 'An app that displays products to the user, enabling them to choose any product to be delivered to their home without having to shop manually.The market is at your fingertips. with flutter, laravel, and Mysql',
    image: '../images/8bcbpa76.png',
    technologies: ['laravel', ' API', 'flutter', 'Mysql'],
    githubUrl: 'https://github.com/fadi9p9/Delivery_man0.1',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'In this application you can see the movies that will be shown in the cinema, you can see a description of the movie that will be shown, at what time, and the ticket price, and you can reserve a specific number of tickets.',
    image: '../images/cinema.png',
    technologies: ['java', 'GUI', 'without database'],
    githubUrl: 'https://github.com/fadi9p9/Cinema_Reservations_Management_usingJava',
    liveUrl: 'https://example.com'
  },
  {
    title: 'job opportunity',
    description: 'An application that allows users to search for job opportunities that match their skills through suggestions or manual search, or allows companies to search for employees with the necessary skills to satisfy everyone.',
    image: '../images/laravel-featured.avif',
    technologies: ['laravel', ' API', 'Mysql'],
    githubUrl: 'https://github.com/Obada7174/job-opportunity',
    liveUrl: 'https://example.com'
  },
  
];

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}