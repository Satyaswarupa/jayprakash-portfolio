"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle,
  CheckCircle,
  Loader2,
} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const openWhatsApp = () => {
    const phoneNumber = '8197225902'
    const message = 'Hi! I visited your portfolio and would like to connect with you.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 8197225902', href: 'tel:+918197225902' },
    { icon: Mail, label: 'Email', value: 'mrmohanty2331@gmail.com', href: 'mailto:mrmohanty2331@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Cuttack, Odisha, India', href: '#' },
  ]

  const socialLinks = [
    { 
      name: 'X', 
      href: 'https://x.com/Mrmohanty27',
      icon: '𝕏' 
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/engr_mohanty_27?igsh=dzc2eXgzcjhpd21r',
      icon: '📷' 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/Mrmohanty-Tavant',
      icon: '🐙' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/jayprakash-mohanty-11a6a2204',
      icon: '💼' 
    },
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
    <section id="contact" className="section relative py-20" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-5xl font-bold mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to say hi?
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info + Social Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6366f1]/30 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94a3b8]">{info.label}</p>
                      <p className="font-medium text-white group-hover:text-[#6366f1] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-5 text-white">Connect with me</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#6366f1]/40 transition-all group"
                      whileHover={{ y: -3 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-[#94a3b8] group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Chat on WhatsApp</h3>
                    <p className="text-sm text-[#94a3b8]">Quick response</p>
                  </div>
                </div>
                <motion.button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-9 h-9 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-[#94a3b8]">Thank you! I'll reply soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-[#94a3b8] mb-1.5">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#94a3b8] mb-1.5">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#6366f1] transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#94a3b8] mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-5 py-3.5 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#6366f1] resize-none transition-colors"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] font-semibold text-base flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-70 mt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact