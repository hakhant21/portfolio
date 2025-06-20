"use client";

import { motion, AnimatePresence } from "framer-motion";
import { skills, experiences } from "@/assets/asset";
import { useState } from "react";

export default function AboutPage() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const defaultVisibleCount = 2; // Show 2 experiences by default

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Personal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Professional Summary
              </h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}>
                <p className="mb-4">
                  For the past four years, I've been immersed in the world of
                  Laravel, crafting backend systems that don't just work—they{" "}
                  <span className="text-indigo-400">thrive under pressure</span>
                  . There's something incredibly satisfying about turning
                  complex business challenges into elegant, scalable solutions.
                </p>

                <p className="mt-2">
                  My sweet spot? 😜 Designing{" "}
                  <span className="text-indigo-400">
                    bulletproof 🛡️ architectures 
                  </span>
                  , squeezing every ounce of performance from databases, and
                  building APIs that other developers actually enjoy using. I
                  geek out over clean, maintainable code and proper
                  documentation.
                </p>
              </motion.div>
            </div>

            {/* Skills */}
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                My Skills
              </h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-dark-700 p-4 rounded-lg flex items-center space-x-3 border border-dark-600">
                    <div className="text-indigo-400">{skill.icon}</div>
                    <div>
                      <h5 className="font-medium text-white">{skill.name}</h5>
                      <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2">
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-700 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                My Journey
              </h3>

              <div className="space-y-8 relative">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-dark-600"></div>

                <AnimatePresence mode="wait">
                  {(showAllExperiences
                    ? experiences
                    : experiences.slice(0, defaultVisibleCount)
                  ).map((item, index) => (
                    <motion.div
                      key={
                        showAllExperiences ? `all-${index}` : `partial-${index}`
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: showAllExperiences ? index * 0.1 : index * 0.1,
                      }}
                      className="relative pl-12">
                      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-300"></div>
                      <div className="bg-dark-700 p-5 rounded-lg border border-dark-600">
                        <div className="w-15 h-0.5 bg-indigo-500 mb-2"></div>
                        <h4 className="text-xl font-semibold text-indigo-200 my-1">
                          {item.company}
                        </h4>
                        <div className="w-10 h-0.5 bg-indigo-500 mb-2"></div>
                        <p className="text-slate-200 font-medium">
                          {item.role}
                          {" - "}
                          <span className="text-indigo-400 text-sm font-medium">
                            ( {item.year} )
                          </span>
                        </p>

                        <p className="text-gray-300 mt-2">
                          {item.descriptions.map((description, index) => (
                            <span key={index} className="block text-sm my-2">
                              {description}
                            </span>
                          ))}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {!showAllExperiences &&
                  experiences.length > defaultVisibleCount && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: defaultVisibleCount * 0.1 + 0.2 }}
                      className="text-center mt-6">
                      <button
                        onClick={() => setShowAllExperiences(true)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors cursor-pointer">
                        Show More (+{experiences.length - defaultVisibleCount})
                      </button>
                    </motion.div>
                  )}
              </div>

              {showAllExperiences && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-6">
                  <button
                    onClick={() => setShowAllExperiences(false)}
                    className="cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
                    Show Less
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
