import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex space-x-6 rtl:space-x-reverse">
          {['home', 'projects', 'skills', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`nav.${item}`)}
            </motion.a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* أيقونة اللغة */}
          <motion.button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Languages className="w-5 h-5 text-black dark:text-white" />
          </motion.button>
          
          {/* أيقونة الوضع المظلم/الفاتح */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-black dark:text-white" />
            ) : (
              <Sun className="w-5 h-5 text-black dark:text-white" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}