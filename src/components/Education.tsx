'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Science in Textile Engineering",
      institution: "National Institute of Textile Engineering and Research (NITER)",
      location: "Savar, Dhaka, Bangladesh",
      period: "2020 - 2024 (Expected)",
      gpa: "3.XX/4.00",
      description: "Specializing in apparel manufacturing technology with focus on sustainable textile production and quality control systems.",
      achievements: [
        "Dean's List for academic excellence",
        "Research project on sustainable fabric development",
        "Active member of Textile Engineering Society"
      ],
      relevantCourses: [
        "Apparel Manufacturing Technology",
        "Textile Chemistry and Processing",
        "Fabric Structure and Design",
        "Quality Control in Textiles",
        "Sustainable Textile Production",
        "Industrial Engineering in Textiles"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      location: "Dhaka, Bangladesh",
      period: "2018 - 2020",
      gpa: "5.00/5.00",
      description: "Science background with focus on Mathematics, Physics, and Chemistry.",
      achievements: [
        "Golden GPA 5.00",
        "Merit scholarship recipient",
        "Science club active member"
      ]
    }
  ]

  const certifications = [
    {
      title: "Textile Testing and Quality Control",
      issuer: "NITER Certification Program",
      date: "2023",
      icon: Award
    },
    {
      title: "Sustainable Manufacturing Practices",
      issuer: "Online Certification",
      date: "2023",
      icon: BookOpen
    },
    {
      title: "Industrial Safety in Manufacturing",
      issuer: "OSHA Bangladesh",
      date: "2022",
      icon: Award
    }
  ]

  return (
    <section id="education" className="py-20 bg-neutral-50">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Education & Qualifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              My academic journey in textile engineering and continuous learning through certifications.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-12 mb-20">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="glass-card rounded-xl p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 font-semibold mb-1">
                            {edu.institution}
                          </p>
                          <div className="flex items-center text-neutral-600 text-sm space-x-4">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                        {edu.gpa && (
                          <div className="mt-4 lg:mt-0">
                            <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                              GPA: {edu.gpa}
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="text-neutral-600 mb-6">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-neutral-900 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center text-neutral-600">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Relevant Courses */}
                      {edu.relevantCourses && (
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-3">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-neutral-600 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-primary-600 text-sm font-medium">
                      {cert.date}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
