"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const educationData = [
     {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Odisha university of Technology and Research (OUTR)",
      duration: "2017 - 2021",
      status: "Completed",
      icon: GraduationCap,
      highlights: ["CGPA: 7.31"]
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Chandigarh University",
      duration: "2023 - 2025",
      status: "Completed",
      icon: GraduationCap,
      highlights: ["CGPA: 8.2"]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="education" className="section relative py-20" ref={ref}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Education
            </span>
            <h2 className="text-5xl font-bold mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <p className="text-[#94a3b8] max-w-xl mx-auto text-lg">
              My formal education journey in Computer Science and Applications
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 group hover:border-[#6366f1]/30 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <edu.icon className="w-7 h-7 text-[#6366f1]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-[#6366f1] font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${
                          edu.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#94a3b8] mt-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#e2e8f0]">
                          <Award className="w-4 h-4 text-[#6366f1]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education