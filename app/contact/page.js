'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiPhone } from 'react-icons/fi'
import { sendEmail } from '@/app/actions/email'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [state, setState] = useState({
    isSubmitting: false,
    status: null,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState({ isSubmitting: true, status: null, message: '' })

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setState({
          isSubmitting: false,
          status: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      setState({
        isSubmitting: false,
        status: 'error',
        message: error.message || 'Oops! Something went wrong. Please try again later.'
      })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-midnight-800 to-midnight-900 text-gray-100 min-h-screen">
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
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3"
            >
              <div className="sticky top-24">
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, 
                  or just want to connect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-midnight-700 p-3 rounded-full flex-shrink-0">
                      <FiMail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-gray-400">mail@hakhant.site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-midnight-700 p-3 rounded-full flex-shrink-0">
                      <FiPhone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-400">095095905</p>
                    </div>
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
              <form 
                onSubmit={handleSubmit}
                className="bg-midnight-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-midnight-600"
              >
                <div className="space-y-6">
                  <div>
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
                        disabled={state.isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
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
                        disabled={state.isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">Phone (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-midnight-600 border border-midnight-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        disabled={state.isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
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
                        disabled={state.isSubmitting}
                      />
                    </div>
                  </div>
                  
                  {state.status && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center mb-16"
                    >
                      <div className={`p-4 rounded-md border ${
                        state.status === 'success' 
                          ? 'bg-green-500/20 border-green-500 text-green-300' 
                          : 'bg-red-500/20 border-red-500 text-red-300'
                      }`}>
                        {state.message}
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={state.isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-md hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}