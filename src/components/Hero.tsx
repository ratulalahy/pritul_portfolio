'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, Github, Linkedin, MapPin } from 'lucide-react'

const Hero = () => {
    // Container animation variants
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

    // Text and item animation variants
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Main content */}
      <div className="container-width section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-blue-100 text-sm font-medium text-slate-600">
              <MapPin size={16} className="text-blue-500" />
              Dhaka, Bangladesh
            </span>
          </motion.div>

          {/* Main heading with gradient text */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-['Inter']"
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Taufiq Imroze
            </span>
          </motion.h1>

          {/* Subtitle with textile focus */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-slate-700 mb-8 leading-relaxed"
          >
            Textile Engineering Student at{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              NITER
            </span>
            <br />
            <span className="text-lg text-slate-600 font-normal">
              Transforming Textiles Through Innovation
            </span>
          </motion.h2>

          {/* Brief description - shortened and more selective */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about sustainable textile manufacturing and innovative fabric technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links - clean design without circles */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/pritulalahy", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pritulalahy@gmailcom", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <span className="text-sm mb-2 group-hover:text-blue-600 transition-colors">Explore More</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero