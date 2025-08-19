'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Heart, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  const values = [
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and methodologies in textile engineering"
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Committed to delivering high-quality solutions and maintaining industry standards"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Passionate about creating eco-friendly and sustainable textile solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believe in teamwork and effective communication for successful projects"
    }
  ]

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated textile engineering student passionate about sustainable manufacturing and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                My Textile Engineering Journey
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-lg">
                Currently pursuing my Bachelor&apos;s degree in Textile Engineering at NITER, 
                I am fascinated by the fusion of traditional craftsmanship and cutting-edge technology.
              </p>

              <p className="text-slate-600 leading-relaxed">
                My focus on <span className="font-semibold text-blue-600">apparel manufacturing</span> drives me to explore 
                sustainable production methods, advanced quality control systems, and innovative fabric development.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Through academic projects and hands-on experience, I&apos;ve developed expertise in 
                textile manufacturing processes, sustainable production techniques, and quality assurance protocols.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Sustainable Manufacturing', 'Quality Control', 'Fabric Innovation', 'Process Optimization'].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-slate-200/30 hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-500 stroke-1" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200"
          >
            {[
              { number: "3.5+", label: "Years of Study" },
              { number: "2+", label: "Projects Completed" },
              { number: "1", label: "Internships" },
              { number: "95%", label: "Academic Performance" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
