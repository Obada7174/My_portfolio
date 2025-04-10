import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Instagram } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa'; // تحتاج إلى تثبيت react-icons
import emailjs from '@emailjs/browser';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/fadi9p9', 
    label: 'GitHub',
    lightHover: 'hover:bg-gray-800 hover:text-white',
    darkHover: 'dark:hover:bg-gray-700 dark:hover:text-white'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com', 
    label: 'LinkedIn',
    lightHover: 'hover:bg-blue-600 hover:text-white',
    darkHover: 'dark:hover:bg-blue-700 dark:hover:text-white'
  },
  { 
    icon: Mail, 
    href: 'mailto:fadeaboemad@gmail.com', 
    label: 'Email',
    lightHover: 'hover:bg-red-500 hover:text-white',
    darkHover: 'dark:hover:bg-red-600 dark:hover:text-white'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/fade_henawe', 
    label: 'Instagram',
    lightHover: 'hover:bg-pink-500 hover:text-white',
    darkHover: 'dark:hover:bg-pink-600 dark:hover:text-white'
  },
  { 
    icon: FaTelegram, 
    href: 'https://t.me/@Fadi_henawe', 
    label: 'Telegram',
    lightHover: 'hover:bg-blue-400 hover:text-white',
    darkHover: 'dark:hover:bg-blue-500 dark:hover:text-white'
  }
];

export function ContactSection() {
  const { t } = useTranslation();
  const form = React.useRef();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zta1l1e',
      'template_9bg2qbp',
      form.current,
      '1RGCQGGLiicPsakSC'
    )
    .then((result) => {
      alert(t('contact.successMessage'));
      form.current.reset();
    }, (error) => {
      alert(t('contact.errorMessage'));
    });
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* === قسم الروابط الاجتماعية === */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {t('contact.getInTouch')}
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label, lightHover, darkHover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 ${lightHover} ${darkHover} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* === قسم نموذج التواصل === */}
          <motion.form
            ref={form}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* حقل الاسم */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>

            {/* حقل الرسالة */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>

            {/* زر الإرسال */}
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>{t('contact.send')}</span>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}