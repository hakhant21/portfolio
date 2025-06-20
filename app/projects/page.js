'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-commerce API',
    description: 'A complete RESTful API for an e-commerce platform with payment integration, inventory management, and user authentication.',
    technologies: ['Laravel', 'MySQL', 'JWT', 'Stripe API'],
    image: '/project-1.jpg',
  },
  {
    id: 2,
    title: 'SAAS Platform',
    description: 'Subscription-based software with multi-tenancy architecture, role-based access control, and automated billing.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
    image: '/project-2.jpg',
  },
  {
    id: 3,
    title: 'Real-time Analytics Dashboard',
    description: 'Dashboard with real-time data visualization and reporting for business intelligence.',
    technologies: ['Laravel', 'Livewire', 'Chart.js', 'WebSockets'],
    image: '/project-3.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-midnight-800 to-midnight-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-midnight-700/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-midnight-600"
            >
              <div className="h-48 bg-gradient-to-br from-midnight-600 to-midnight-700 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-midnight-600 text-indigo-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}