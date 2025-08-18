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
    <section id="about" className="py-20 bg-white">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              I'm a dedicated textile engineering student with a passion for sustainable 
              apparel manufacturing and innovative textile technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                My Journey in Textile Engineering
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                Currently pursuing my Bachelor's degree in Textile Engineering at the 
                National Institute of Textile Engineering and Research (NITER), I am 
                deeply fascinated by the intersection of traditional textile craftsmanship 
                and modern manufacturing technologies.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                My focus is primarily on apparel manufacturing, where I explore sustainable 
                production methods, quality control systems, and innovative fabric development. 
                I believe that the future of textiles lies in creating environmentally conscious 
                solutions without compromising on quality or functionality.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Through my academic projects and internships, I've gained hands-on experience 
                with industrial textile machinery, quality testing procedures, and production 
                optimization techniques. I'm particularly interested in how data analytics and 
                automation can revolutionize textile manufacturing processes.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Sustainable Manufacturing', 'Quality Control', 'Fabric Development', 'Process Optimization'].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
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
                    whileHover={{ y: -5 }}
                    className="p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-neutral-600">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200"
          >
            {[
              { number: "3+", label: "Years of Study" },
              { number: "15+", label: "Projects Completed" },
              { number: "2", label: "Internships" },
              { number: "95%", label: "Academic Performance" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 text-sm">
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
