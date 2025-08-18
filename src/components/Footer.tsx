'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-neutral-800"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:pritul.rahman@example.com",
      color: "hover:text-primary-600"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Toufiq Imroze
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Textile Engineering student passionate about sustainable manufacturing 
              and innovative apparel technologies. Building the future of eco-friendly textiles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 ${social.color} transition-all duration-300 hover:bg-neutral-700`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-neutral-400 text-sm">Email</p>
                <a 
                  href="mailto:pritul.rahman@example.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  pritul.rahman@example.com
                </a>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Location</p>
                <p className="text-neutral-300">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">University</p>
                <p className="text-neutral-300">NITER</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-neutral-400 text-sm">
            <span>© {currentYear} Toufiq Imroze. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and Next.js</span>
          </div>

          <div className="flex items-center space-x-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white hover:bg-primary-600 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="text-center">
            <p className="text-neutral-500 text-xs mb-2">
              Built with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 pt-6 border-t border-neutral-800">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-neutral-400 italic text-sm max-w-2xl mx-auto"
          >
            "The future of fashion lies in sustainable innovation and responsible manufacturing. 
            Every thread we weave today shapes the world we leave tomorrow."
          </motion.blockquote>
          <p className="text-neutral-500 text-xs mt-2">- Philosophy on Sustainable Textiles</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
