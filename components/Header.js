'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-sm border-b border-dark-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-indigo-400">
              HAK
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}