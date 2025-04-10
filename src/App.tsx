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
      
      <main className="container px-4 pt-20 mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 flex justify-between items-center"
        >
          <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.greeting')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('home.role')}
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('home.description')}
          </p>
          </div>
          <div>
            <img className="rounded-full w-50 h-50" src="https://scontent.flca1-1.fna.fbcdn.net/v/t39.30808-1/474869038_3845912208958146_6898356624026805185_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3pCLytnQTF0Q7kNvwGG6A0J&_nc_oc=AdnZ66Zk35V6qGTYL3PHS2U3U5I7_xSCkvD60Nle_K1FlOl1sQLtE6oLRSrloXkaR5I&_nc_zt=24&_nc_ht=scontent.flca1-1.fna&_nc_gid=bFnu18bLrHcRBmFMnLdGBw&oh=00_AfFCwL5LDGWxaZIhGGeuINN5UM1lh7smpuHYN6Nrh050eQ&oe=67FD78B8" alt="" />
          </div>
        </motion.section>

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;