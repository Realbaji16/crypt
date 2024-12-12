import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';
import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';
import { Newsletter } from './Newsletter';
import { FaShieldAlt, FaUserLock, FaCertificate, FaGlobe, FaHeadset, FaUsers } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: FaShieldAlt, 
              title: "Enterprise Security", 
              desc: "Military-grade encryption & secure infrastructure",
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: FaHeadset, 
              title: "24/7 Support", 
              desc: "Round-the-clock assistance for all your needs",
              color: "from-purple-500 to-purple-600"
            },
            { 
              icon: FaGlobe, 
              title: "Global Platform", 
              desc: "Trusted by users from over 150+ countries",
              color: "from-green-500 to-green-600"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-600">
              The next generation platform for crypto earning and investments. Join thousands of satisfied users worldwide.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Platform"
            links={[
              { label: "How It Works", href: "#earning-steps" },
              { label: "Monthly Earnings", href: "#monthly-earnings" },
              { label: "Supported Wallets", href: "#wallets" },
              { label: "Analytics", href: "#analytics" },
              { label: "Security", href: "#security" },
            ]}
          />

          {/* Resources */}
          <FooterLinks
            title="Resources"
            links={[
              { label: "Documentation", href: "#docs" },
              { label: "API Reference", href: "#api" },
              { label: "Whitepaper", href: "#whitepaper" },
              { label: "FAQs", href: "#faqs" },
              { label: "Blog", href: "#blog" },
            ]}
          />

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-200/50 mb-12">
          {[
            { label: "Active Users", value: "50K+", icon: FaUsers },
            { label: "Countries", value: "150+", icon: FaGlobe },
            { label: "Support Response", value: "< 5 min", icon: FaHeadset },
            { label: "Uptime", value: "99.99%", icon: FaShieldAlt },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <FaCertificate className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} CryptoVault. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Cookie Policy
            </a>
            <a href="#compliance" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};