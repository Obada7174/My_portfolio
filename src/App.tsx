import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { ScrollProgress } from './components/ScrollProgress';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <ScrollProgress />
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.greeting')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('home.role')}
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('home.description')}
          </p>
        </motion.section>

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;