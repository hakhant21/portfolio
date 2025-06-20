'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLaravel, FaServer, FaCloud, FaVuejs, FaDocker } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { IoHardwareChipOutline } from 'react-icons/io5' // Alternative IoT icon

export default function Home() {
  return (
    <section className="py-20 bg-gradient-to-br from-midnight-800 to-midnight-900 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm a <span className="text-indigo-400">Laravel</span> Developer
            </h1>
            <div className="text-lg text-gray-300 mb-8">
              I build robust backend systems and APIs with Laravel, specializing in:
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>E-commerce solutions</li>
                <li>SAAS platforms</li>
                <li>Enterprise applications</li>
                <li>Real-time fuel monitoring with IoT devices</li>
                <li>Cloud-connected sensor systems</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md transition-colors"
              >
                <Link href="/contact">Hire Me</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 px-6 py-3 rounded-md transition-colors"
              >
                <Link href="/projects">View Work</Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-midnight-700">
                <img 
                  src="/profile.jpg" 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Skills Section - Now with IoT */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FaVuejs className="text-green-500 text-xl" />, name: 'Vue', desc: 'Frontend development' },
              { icon: <FaLaravel className="text-red-500 text-xl" />, name: 'Laravel', desc: 'Backend systems' },
              { icon: <FaCloud className="text-amber-400 text-xl" />, name: 'Proxmox', desc: 'Homelab' },
              { icon: <SiMysql className="text-blue-400 text-xl" />, name: 'Database', desc: 'Time-series data' },
              { icon: <IoHardwareChipOutline className="text-indigo-400 text-xl" />, name: 'IoT', desc: 'Device management' },
              { icon: <FaDocker className="text-cyan-400 text-xl" />, name: 'Docker', desc: 'Containerization' },
              { icon: <FaServer className="text-indigo-400 text-xl" />, name: 'APIs', desc: 'Real-time data' },
              { icon: <FaCloud className="text-cyan-400 text-xl" />, name: 'Cloud', desc: 'Scalable solutions' }
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-midnight-700/80 p-4 rounded-lg border border-midnight-600"
              >
                <span>{skill.icon}</span>
                <div>
                  <p className="font-medium text-white">{skill.name}</p>
                  <p className="text-xs text-gray-400">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IoT Specific Capabilities */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-midnight-700/50 p-6 rounded-xl border border-midnight-600"
        >
          <h3 className="text-xl font-semibold text-white mb-4">IoT & Real-Time Monitoring</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">▹</span>
              <span>Real Time Fuel management monitoring systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">▹</span>
              <span>Device-to-cloud data pipelines</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">▹</span>
              <span>Data Syncronization with cloud</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">▹</span>
              <span>Custom sensor integration</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}