'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiPhone } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-midnight-800 to-midnight-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3 mb-10 md:mb-0 md:pr-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out if you're looking for a Laravel developer, have a question, 
                or just want to connect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-midnight-700 p-3 rounded-full mr-4">
                    <FiMail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">mail@hakhant.site</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="bg-midnight-700 p-3 rounded-full mr-4">
                    <FiPhone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-400">095095905</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-2/3"
            >
              <form onSubmit={handleSubmit} className="bg-midnight-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-midnight-600">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-midnight-600 border border-midnight-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-midnight-600 border border-midnight-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="h-5 w-5 text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full pl-10 pr-4 py-2 bg-midnight-600 border border-midnight-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-md hover:from-indigo-500 hover:to-purple-500 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}