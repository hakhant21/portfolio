'use client'

import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi'

export default function AboutPage() {
  const skills = [
    { name: 'Laravel', icon: <FiServer className="w-5 h-5" />, level: 'Expert' },
    { name: 'PHP', icon: <FiCode className="w-5 h-5" />, level: 'Expert' },
    { name: 'MySQL', icon: <FiDatabase className="w-5 h-5" />, level: 'Advanced' },
    { name: 'API Development', icon: <FiCpu className="w-5 h-5" />, level: 'Expert' },
  ]

  const experience = [
    {
      year: '2022 - Present',
      role: 'Senior Laravel Developer',
      company: 'TechSolutions Inc.',
      description: 'Lead backend development for enterprise SaaS platform'
    },
    {
      year: '2019 - 2022',
      role: 'PHP Developer',
      company: 'WebCraft Studios',
      description: 'Built custom CMS solutions for clients'
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate Laravel backend developer with 5+ years of experience 
                building robust web applications and APIs. I specialize in creating 
                scalable solutions for complex business problems.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me contributing to open-source 
                projects or exploring new technologies in the PHP ecosystem.
              </p>
              
              {/* Skills Grid */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-white mb-6">My Skills</h4>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="bg-dark-700 p-4 rounded-lg flex items-center space-x-3 border border-dark-600"
                    >
                      <div className="text-indigo-400">
                        {skill.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-white">{skill.name}</h5>
                        <p className="text-sm text-gray-400">{skill.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-dark-600"></div>
                
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-300"></div>
                    
                    <div className="bg-dark-700 p-5 rounded-lg border border-dark-600">
                      <span className="text-indigo-400 text-sm font-medium">{item.year}</span>
                      <h4 className="text-xl font-semibold text-white mt-1">{item.role}</h4>
                      <p className="text-gray-400 font-medium">{item.company}</p>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}