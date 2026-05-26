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

  const profileImage = "https://media.licdn.com/dms/image/v2/D5603AQHTaD8ra7S2cw/profile-displayphoto-crop_800_800/B56Z5A3aEuJgAI-/0/1779204728186?e=1781136000&v=beta&t=ZMoD0_l7xrOrQOu3CGnw_42SsMpI6mOpLF7k8_6GTZI"

  const stats = [
    { icon: Calendar, value: '4+', label: 'Years Experience' },
    { icon: Award, value: '20+', label: 'Enterprise Projects' },
    { icon: Coffee, value: '1500+', label: 'Coffee Sessions' },
    { icon: User, value: '99.9%', label: 'Production Stability' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-title">
              Bridging Development &amp; Operations
            </h2>
            <p className="section-subtitle mx-auto text-lg">
              Transitioning to DevOps with strong production expertise
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-[#6366f1]/10 to-[#ec4899]/10">
                  <img
                    src={profileImage}
                    alt="Jayprakash Mohanty"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#6366f1]/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ec4899]/10 rounded-2xl" />
            </motion.div>

            {/* Text Side - Updated with your new content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-snug">
                Bridging Development &amp; Operations —{' '}
                <span className="gradient-text">Transitioning to DevOps</span>
              </h3>

              <div className="space-y-5 text-[#94a3b8] leading-relaxed">
                <p>
                  With 4+ years of hands-on experience in enterprise Java application 
                  development and production support across BFSI and Fintech domains, 
                  I am now channeling my deep operational expertise into a focused 
                  DevOps career transition.
                </p>

                <p>
                  My background in deployment management, incident management, SQL optimization, 
                  monitoring systems, and troubleshooting critical production issues gives me 
                  a natural foundation for DevOps — I've been living at the intersection of 
                  Dev and Ops for years.
                </p>

                <p>
                  Currently expanding my skills in CI/CD pipelines, Infrastructure as Code 
                  (Terraform, Ansible), containerization (Docker, Kubernetes), and cloud-native 
                  architectures on AWS. I bring with me strong experience in Linux, ETL processes, 
                  Control-M scheduling, and ITIL practices — skills that translate directly into 
                  building reliable, automated delivery pipelines.
                </p>

                <p>
                  I thrive in high-stakes environments where uptime, performance, and precision 
                  matter — and I'm now building the toolset to automate, scale, and secure those 
                  environments end to end.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Server className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">Production Expertise</h4>
                  <p className="text-sm text-[#94a3b8]">Incident Management &amp; Troubleshooting</p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Cloud className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">DevOps Journey</h4>
                  <p className="text-sm text-[#94a3b8]">Docker • Kubernetes • Terraform • CI/CD</p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <Database className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">Backend &amp; Data</h4>
                  <p className="text-sm text-[#94a3b8]">Java • Spring Boot • SQL Optimization</p>
                </div>

                <div className="glass rounded-2xl p-4 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-[#6366f1] mb-3" />
                  <h4 className="text-white font-semibold mb-1">Enterprise Ready</h4>
                  <p className="text-sm text-[#94a3b8]">ITIL • Monitoring • BFSI Domain</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
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
                <p className="text-sm text-[#94a3b8]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About