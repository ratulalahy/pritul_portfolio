'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import TextileBackground from '@/components/TextileBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative">
      {/* Site-wide textile background animations */}
      <TextileBackground />
      
      <div className="relative z-10">
        <Navigation />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  )
}
