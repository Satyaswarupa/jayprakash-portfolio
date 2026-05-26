"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Code2, MessageCircle } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    const phoneNumber = '8197225902' // ←←← Change this to your actual phone number (with country code, but without +)
    const message = 'Hi! I visited your portfolio and would like to connect with you.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-[#0f0f23] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-[#6366f1]" />
              <span className="text-xl font-bold gradient-text font-['Space_Grotesk']">
                Portfolio
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              Building digital experiences with passion and precision.
              Let's create something amazing together.
            </p>
            <motion.button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-['Space_Grotesk']">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#94a3b8] hover:text-[#6366f1] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 font-['Space_Grotesk']">Contact</h4>
            <ul className="space-y-3 text-sm text-[#94a3b8]">
              <li>+91 8197225902</li>
              <li>mrmohanty2331@gmail.com</li>
              <li>Banglore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[#ec4899] fill-[#ec4899]" /> Jayprakash...
          </p>

          <div className="flex items-center gap-4">
            <p className="text-[#94a3b8] text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:border-[#6366f1]/30 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
