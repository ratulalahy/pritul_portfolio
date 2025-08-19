'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin, Globe, User } from 'lucide-react'
import { useRef } from 'react'

interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin?: string
    website?: string
    includePhoto?: boolean
  }
  summary: string
  education: Array<{
    degree: string
    institution: string
    location: string
    year: string
    gpa: string
    relevantCourses: string[]
  }>
  experience: Array<{
    title: string
    company: string
    location: string
    period: string
    responsibilities: string[]
  }>
  skills: {
    technical: string[]
    software: string[]
    languages: string[]
  }
  projects: Array<{
    title: string
    period: string
    description: string
    technologies: string[]
  }>
  certifications: string[]
}

interface ResumeTemplateProps {
  resumeData: ResumeData
}

const ResumeTemplate = ({ resumeData }: ResumeTemplateProps) => {
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadPDF = () => {
    if (resumeRef.current) {
      window.print()
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Download Controls */}
      <div className="flex justify-center mb-8 no-print">
        <motion.button
          onClick={downloadPDF}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-lg font-medium"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </motion.button>
      </div>

      {/* Resume Content */}
      <motion.div
        ref={resumeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg border border-gray-200 p-8 print:shadow-none print:border-none print:p-6"
      >
        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-gray-300">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Photo placeholder if enabled */}
              {resumeData.personalInfo.includePhoto && (
                <div className="float-right ml-6 mb-4">
                  <div className="w-24 h-24 bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                    <User size={32} className="text-gray-500" />
                  </div>
                </div>
              )}
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {resumeData.personalInfo.name}
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">
                {resumeData.personalInfo.title}
              </h2>
              
              {/* Contact Information */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail size={14} />
                  <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} />
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
                {resumeData.personalInfo.linkedin && (
                  <div className="flex items-center space-x-2">
                    <Linkedin size={14} />
                    <span>{resumeData.personalInfo.linkedin}</span>
                  </div>
                )}
                {resumeData.personalInfo.website && (
                  <div className="flex items-center space-x-2">
                    <Globe size={14} />
                    <span>{resumeData.personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {resumeData.summary}
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            EDUCATION & QUALIFICATIONS
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-600">{edu.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{edu.year}</p>
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Relevant Coursework:</p>
                <p className="text-sm text-gray-600">
                  {edu.relevantCourses.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            PROFESSIONAL EXPERIENCE
          </h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.location}</p>
                </div>
                <p className="font-medium text-gray-900">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {resumeData.skills.technical.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold text-gray-900 mb-2">Software Proficiency</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {resumeData.skills.software.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div> */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {resumeData.skills.languages.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            KEY PROJECTS
          </h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{project.title}</h4>
                <p className="font-medium text-gray-900">{project.period}</p>
              </div>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Technologies:</span> {project.technologies.join(' • ')}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            CERTIFICATIONS & ACHIEVEMENTS
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          .print\\:border-none {
            border: none !important;
          }
          
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          
          /* Fix icon alignment in print */
          svg {
            vertical-align: middle !important;
          }
          
          /* Better typography for print */
          h1, h2, h3, h4, h5, h6 {
            color: #000 !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ResumeTemplate
