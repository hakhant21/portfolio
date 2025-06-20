'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/hakhant21' },
    { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/htet-aung-khant-b0002516b/' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-midnight-800 to-midnight-900 text-gray-100 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-indigo-400">Htet Aung Khant</h3>
            <p className="text-gray-400 mt-2">Backend Developer & API Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-midnight-700 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Htet Aung Khant. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}