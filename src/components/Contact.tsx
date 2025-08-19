'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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
        duration: 0.6
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email service integration here
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pritulalahy@example.com",
      link: "mailto:pritulalahy@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1X-XXXX-XXXX",
      link: "tel:+8801XXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ]

  const socialLinks = [
    // {
    //   icon: Github,
    //   name: "GitHub",
    //   url: "https://github.com",
    //   color: "hover:text-neutral-800"
    // },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/8801XXXXXXXX",
      color: "hover:text-green-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 px-4 sm:px-0">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto px-4 sm:px-0">
              I&apos;m always open to discussing new opportunities, collaborations, or just having a conversation about textile engineering and sustainable manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 px-4 sm:px-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">
                  Let&apos;s Connect
                </h3>
                <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Whether you&apos;re a recruiter looking for fresh talent, a fellow student interested in collaboration, 
                  or someone passionate about sustainable textiles, I&apos;d love to hear from you.
                </p>
              </div>

              {/* Availability - Moved to better position */}
              <div className="glass-card rounded-xl p-6">
                <h4 className="font-semibold text-neutral-900 mb-3">
                  Current Availability
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-neutral-600">Open for internship opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-neutral-600">Available for research collaborations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-neutral-600">Seeking full-time opportunities</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-neutral-50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-500 stroke-1" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">
                          {info.title}
                        </p>
                        <p className="text-neutral-600">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">
                  Connect on Social Media
                </h4>
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
                        className={`w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 ${social.color} transition-all duration-300`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Response Time Notice */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-neutral-600 text-sm">
              📧 I typically respond within 24-48 hours. For urgent matters, feel free to reach out on WhatsApp!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
