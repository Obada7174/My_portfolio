import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // أضف هذه المكتبة

const socialLinks = [
  { icon: Github, href: 'https://github.com/fadi9p9', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
];

export function ContactSection() {
  const { t } = useTranslation();
  const form = React.useRef();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zta1l1e', // استبدل هذا بـ Service ID
      'template_9bg2qbp', // استبدل هذا بـ Template ID
      form.current,
      '1RGCQGGLiicPsakSC' // استبدل هذا بـ Public Key
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
          {/* ... الجزء الخاص بالروابط الاجتماعية يبقى كما هو ... */}

          <motion.form
            ref={form} // أضف هذا المرجع
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name" // أضف name attribute
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email" // أضف name attribute
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message" // أضف name attribute
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow"
                required
              />
            </div>
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