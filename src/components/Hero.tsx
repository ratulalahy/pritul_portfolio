'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github, Linkedin, MapPin } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-neutral-50 to-neutral-100 pt-16">
      <div className="container-width section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-primary-600 font-semibold text-lg"
                variants={itemVariants}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-neutral-900"
                variants={itemVariants}
              >
                Toufiq Imroze
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-3xl font-semibold gradient-text"
                variants={itemVariants}
              >
                Textile Engineer & Apparel Manufacturing Specialist
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-neutral-600 leading-relaxed"
            >
              Passionate about sustainable textile engineering and innovative apparel manufacturing. 
              Currently pursuing my degree in Textile Engineering at NITER, with a focus on 
              creating eco-friendly solutions for the fashion industry.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-4 text-neutral-600"
            >
              <MapPin size={18} />
              <span>Dhaka, Bangladesh</span>
              <span>•</span>
              <span>NITER Student</span>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </motion.a>
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Resume
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20"
              />
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile-placeholder.jpg"
                  alt="Toufiq Imroze"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-600 hover:text-primary-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
