'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', anchor: '#home' },
    { name: 'About', href: '/', anchor: '#about' },
    { name: 'Education', href: '/', anchor: '#education' },
    { name: 'Skills', href: '/', anchor: '#skills' },
    { name: 'Projects', href: '/', anchor: '#projects' },
    { name: 'Contact', href: '/', anchor: '#contact' },
  ]

  const handleDownloadResume = () => {
    // This will be implemented later with the PDF export functionality
    console.log('Download resume clicked')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Toufiq Imroze
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/resume"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-300 font-medium"
            >
              Resume
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-primary flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-neutral-700 hover:text-primary-600 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/resume"
              className="block text-neutral-700 hover:text-primary-600 transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <button
              onClick={() => {
                handleDownloadResume()
                setIsOpen(false)
              }}
              className="btn-primary flex items-center space-x-2 w-full justify-center"
            >
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
