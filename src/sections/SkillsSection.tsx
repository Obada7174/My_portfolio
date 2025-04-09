import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { Code2, Server, Database, Palette, Terminal, Globe } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: Code2,
    level: 90,
    color: 'bg-blue-500'
  },
  {
    title: 'Backend Development',
    icon: Server,
    level: 85,
    color: 'bg-green-500'
  },
  {
    title: 'Database Management',
    icon: Database,
    level: 80,
    color: 'bg-purple-500'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    level: 75,
    color: 'bg-pink-500'
  },
  {
    title: 'DevOps',
    icon: Terminal,
    level: 70,
    color: 'bg-orange-500'
  },
  {
    title: 'Web Security',
    icon: Globe,
    level: 85,
    color: 'bg-red-500'
  }
];

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}