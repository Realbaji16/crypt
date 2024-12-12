import React from 'react';
import { motion } from 'framer-motion';

interface Link {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};