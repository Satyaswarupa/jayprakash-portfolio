"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code2, 
  Rocket, 
  Shield,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building fast, responsive, and SEO-friendly websites using modern frameworks like React, Next.js, and Vue.',
      color: '#6366f1',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications with React Native and Flutter for iOS and Android.',
      color: '#ec4899',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing interfaces that provide exceptional user experiences.',
      color: '#06b6d4',
    },
    {
      icon: Code2,
      title: 'API Development',
      description: 'Building robust RESTful and GraphQL APIs with Node.js, Python, and modern database solutions.',
      color: '#8b5cf6',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Optimizing application performance, load times, and scalability for better user retention.',
      color: '#f59e0b',
    },
    {
      icon: Shield,
      title: 'Code Review & Consulting',
      description: 'Providing expert code reviews, architecture consulting, and technical guidance for your projects.',
      color: '#10b981',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="section relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What I Do
            </span>
            <h2 className="section-title">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subtitle mx-auto">
              From concept to deployment, I provide end-to-end solutions
              tailored to your business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                    border: `1px solid ${service.color}30`
                  }}
                >
                  <service.icon 
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 font-['Space_Grotesk'] group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: service.color }}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-[#94a3b8] mb-6">
              Have a project in mind? Let's discuss how I can help.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
