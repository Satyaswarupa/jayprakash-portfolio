"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
// import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import ScrollProgress from './components/ScrollProgress'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#e2e8f0] overflow-x-hidden">
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
