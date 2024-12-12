import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
  { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:bg-indigo-500' },
  { icon: FaTelegram, href: '#', label: 'Telegram', color: 'hover:bg-blue-500' },
  { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: FaMedium, href: '#', label: 'Medium', color: 'hover:bg-green-600' },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          className={`w-10 h-10 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center text-gray-600 hover:text-white ${social.color} transition-all duration-300`}
          whileHover={{ y: -2, scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};