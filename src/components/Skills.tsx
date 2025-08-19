'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cpu, 
  Palette, 
  Settings, 
  BarChart3, 
  Microscope, 
  Recycle,
  Monitor,
  Languages,
  Wrench
} from 'lucide-react'

const Skills = () => {
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
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Textile Engineering",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Fabric Design & Development", level: 85 },
        { name: "Apparel Manufacturing", level: 90 },
        { name: "Textile Testing", level: 80 },
        { name: "Quality Control Systems", level: 85 },
        { name: "Production Planning", level: 75 }
      ]
    },
    {
      title: "Technical Software",
      icon: Monitor,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "CAD Software (TexPro)", level: 80 },
        { name: "NedGraphics", level: 75 },
        { name: "AutoCAD", level: 70 },
        { name: "Microsoft Office Suite", level: 95 },
        { name: "SPSS (Statistical Analysis)", level: 75 }
      ]
    },
    {
      title: "Sustainability & Innovation",
      icon: Recycle,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Sustainable Manufacturing", level: 85 },
        { name: "Eco-friendly Materials", level: 80 },
        { name: "Waste Reduction Strategies", level: 85 },
        { name: "Green Chemistry", level: 75 },
        { name: "Life Cycle Assessment", level: 70 }
      ]
    },
    {
      title: "Research & Analysis",
      icon: BarChart3,
      color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Data Analysis", level: 80 },
        { name: "Research Methodology", level: 85 },
        { name: "Statistical Process Control", level: 75 },
        { name: "Laboratory Testing", level: 90 },
        { name: "Technical Writing", level: 85 }
      ]
    }
  ]

  const additionalSkills = [
    {
      category: "Languages",
      icon: Languages,
      items: ["Bengali (Native)", "English (Fluent)", "Hindi (Conversational)"]
    },
    {
      category: "Industry Tools",
      icon: Wrench,
      items: ["ERP Systems", "PLM Software", "Industrial Machinery", "Testing Equipment"]
    },
    {
      category: "Soft Skills",
      icon: Cpu,
      items: ["Team Leadership", "Project Management", "Problem Solving", "Communication"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Technical expertise developed through academic excellence and hands-on experience.
            </p>
          </motion.div>

          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/30 backdrop-blur-sm border border-slate-200/30 rounded-xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center mr-4">
                      <IconComponent className="w-8 h-8 text-blue-500 stroke-1" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-neutral-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-neutral-600 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalSkills.map((skillSet, index) => {
              const IconComponent = skillSet.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-neutral-50 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-500 stroke-1" />
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-4">
                    {skillSet.category}
                  </h4>
                  <div className="space-y-2">
                    {skillSet.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="px-3 py-1 bg-white rounded-full text-sm text-neutral-600 border border-neutral-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Areas of Interest & Future Goals
              </h3>
              <p className="text-neutral-600 leading-relaxed max-w-4xl mx-auto">
                I am particularly passionate about sustainable textile manufacturing and the integration 
                of technology in traditional textile processes. My goal is to contribute to the development 
                of eco-friendly apparel manufacturing systems that reduce environmental impact while 
                maintaining high quality standards. I&apos;m also interested in exploring smart textiles, 
                automation in manufacturing, and data-driven quality control systems.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {[
                  'Smart Textiles',
                  'Industry 4.0',
                  'Circular Economy',
                  'Digital Manufacturing',
                  'Sustainable Fashion'
                ].map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
