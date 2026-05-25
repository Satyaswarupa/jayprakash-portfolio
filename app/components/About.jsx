"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  User,
  Award,
  Coffee,
  Calendar,
  Database,
  Server,
  Cloud,
  ShieldCheck,
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    { icon: Calendar, value: '4+', label: 'Years Experience' },
    { icon: Award, value: '20+', label: 'Enterprise Projects' },
    { icon: Coffee, value: '1500+', label: 'Coffee Sessions' },
    { icon: User, value: '99.9%', label: 'Production Stability' },
  ]

  const skills = [
    'Java',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Linux',
    'Control-M',
    'Postman API',
    'ETL',
    'SQL',
    'ITIL',
    'Production Support',
    'Incident Management',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      className="section relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>

            <h2 className="section-title">
              Enterprise Software Engineer with{' '}
              <span className="gradient-text">Production Expertise</span>
            </h2>

            <p className="section-subtitle mx-auto">
              Experienced in building, supporting, and maintaining
              enterprise-grade applications across BFSI and Fintech
              domains with strong expertise in Java, databases,
              cloud platforms, and production operations.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6366f1] to-[#ec4899] flex items-center justify-center shadow-2xl">
                      <User className="w-20 h-20 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Jayprakash Mohanty
                    </h3>

                    <p className="text-[#94a3b8] text-sm">
                      Senior Software Engineer
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#6366f1]/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ec4899]/10 rounded-2xl" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-snug">
                Delivering reliable enterprise solutions with{' '}
                <span className="gradient-text">
                  performance & precision
                </span>
              </h3>

              <p className="text-[#94a3b8] leading-relaxed">
                I am a Senior Software Engineer with 4+ years of
                experience in Java Application Development and
                Production Support within BFSI and Fintech domains.
                My expertise includes enterprise application support,
                SQL optimization, monitoring systems, deployment
                management, and troubleshooting critical production
                issues.
              </p>

              <p className="text-[#94a3b8] leading-relaxed">
                I have hands-on experience with Java, PostgreSQL,
                MongoDB, Linux, AWS, ETL processes, Control-M,
                Incident Management, and ITIL practices. I focus on
                ensuring high availability, seamless deployments,
                and stable production environments for enterprise
                applications.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Database className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">
                    Database Expertise
                  </h4>
                  <p className="text-sm text-[#94a3b8]">
                    PostgreSQL, MongoDB, SQL Queries & Optimization
                  </p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Server className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">
                    Production Support
                  </h4>
                  <p className="text-sm text-[#94a3b8]">
                    Incident Management & Root Cause Analysis
                  </p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Cloud className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">
                    Cloud & Linux
                  </h4>
                  <p className="text-sm text-[#94a3b8]">
                    AWS Infrastructure & Linux Environment Support
                  </p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">
                    Enterprise Operations
                  </h4>
                  <p className="text-sm text-[#94a3b8]">
                    ITIL, Monitoring, Deployment & Batch Processing
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full glass text-sm font-medium text-[#94a3b8] hover:text-white hover:border-[#6366f1]/50 transition-all cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center group"
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center group-hover:from-[#6366f1]/30 group-hover:to-[#ec4899]/30 transition-all">
                  <stat.icon className="w-7 h-7 text-[#6366f1]" />
                </div>

                <h4 className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </h4>

                <p className="text-sm text-[#94a3b8]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About