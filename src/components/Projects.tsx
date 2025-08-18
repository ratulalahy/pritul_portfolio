'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
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

  const projects = [
    {
      title: "Sustainable Cotton Fabric Development",
      description: "Developed an eco-friendly cotton fabric using organic materials and water-efficient processing techniques. The project focused on reducing environmental impact while maintaining fabric quality and durability.",
      image: "/images/project-1.jpg",
      category: "Academic Research",
      period: "Fall 2023",
      technologies: ["Organic Cotton", "Natural Dyes", "Water-efficient Processing", "Sustainability Analysis"],
      achievements: [
        "Reduced water consumption by 40%",
        "Achieved 95% biodegradability",
        "Maintained industry-standard durability",
        "Published research findings"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Quality Control System Implementation",
      description: "Designed and implemented a comprehensive quality control system for textile production, incorporating statistical process control and automated testing procedures.",
      image: "/images/project-2.jpg",
      category: "Process Optimization",
      period: "Spring 2023",
      technologies: ["Statistical Analysis", "Process Control", "Quality Standards", "Data Analytics"],
      achievements: [
        "Improved defect detection by 60%",
        "Reduced production waste by 25%",
        "Streamlined testing procedures",
        "Enhanced production efficiency"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Smart Textile Integration Study",
      description: "Research project exploring the integration of smart fibers and sensors into traditional textile structures for wearable technology applications.",
      image: "/images/project-3.jpg",
      category: "Innovation Research",
      period: "Summer 2023",
      technologies: ["Smart Fibers", "Sensor Integration", "Wearable Tech", "Conductive Materials"],
      achievements: [
        "Successfully integrated sensors",
        "Maintained fabric flexibility",
        "Developed prototype garments",
        "Collaboration with tech companies"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Apparel Manufacturing Optimization",
      description: "Internship project focusing on optimizing apparel manufacturing processes through lean manufacturing principles and workflow analysis.",
      image: "/images/project-4.jpg",
      category: "Industrial Project",
      period: "Summer 2022",
      technologies: ["Lean Manufacturing", "Workflow Analysis", "Process Optimization", "Time Studies"],
      achievements: [
        "Increased production efficiency by 30%",
        "Reduced manufacturing lead time",
        "Improved worker productivity",
        "Cost reduction of 15%"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Sustainable Dyeing Process Research",
      description: "Research on developing environmentally friendly dyeing processes using natural and bio-based dyes for textile applications.",
      image: "/images/project-5.jpg",
      category: "Environmental Research",
      period: "Fall 2022",
      technologies: ["Natural Dyes", "Bio-based Materials", "Color Fastness", "Environmental Analysis"],
      achievements: [
        "Eliminated toxic chemicals",
        "Achieved vibrant color retention",
        "Reduced water pollution",
        "Developed scalable processes"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Textile Waste Recycling Initiative",
      description: "Community project aimed at developing a systematic approach to textile waste recycling and creating new products from waste materials.",
      image: "/images/project-6.jpg",
      category: "Community Impact",
      period: "Spring 2022",
      technologies: ["Waste Processing", "Recycling Technology", "Material Recovery", "Circular Economy"],
      achievements: [
        "Processed 500kg of textile waste",
        "Created 50+ recycled products",
        "Engaged 100+ community members",
        "Established recycling protocols"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ]

  const categories = ["All", "Academic Research", "Process Optimization", "Innovation Research", "Industrial Project", "Environmental Research", "Community Impact"]

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Projects & Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Academic projects, research work, and practical implementations showcasing my expertise in textile engineering and sustainable manufacturing.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300">📊</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-primary-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center text-neutral-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Key Achievement */}
                  <div className="mb-4">
                    <p className="text-sm text-neutral-600">
                      <span className="font-medium">Key Achievement:</span> {project.achievements[0]}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <Github className="w-4 h-4 text-neutral-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200"
          >
            {[
              { number: "15+", label: "Projects Completed" },
              { number: "3", label: "Research Papers" },
              { number: "2", label: "Industry Collaborations" },
              { number: "500+", label: "Hours of Research" }
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

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Discuss a Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
