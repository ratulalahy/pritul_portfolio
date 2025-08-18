'use client'

import { motion } from 'framer-motion'
import { Download, Printer, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'
import { useRef } from 'react'

interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
    website: string
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

  const downloadPDF = async () => {
    if (typeof window !== 'undefined') {
      const html2canvas = (await import('html2canvas')).default
      const jsPDF = (await import('jspdf')).default

      if (resumeRef.current) {
        const canvas = await html2canvas(resumeRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true
        })
        
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const imgWidth = 210
        const pageHeight = 297
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight

        let position = 0

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }

        pdf.save(`${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`)
      }
    }
  }

  const printResume = () => {
    window.print()
  }

  return (
    <div className="bg-white">
      {/* Action Buttons */}
      <div className="mb-6 flex justify-end space-x-4 print:hidden">
        <motion.button
          onClick={downloadPDF}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </motion.button>
        <motion.button
          onClick={printResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          <Printer size={16} />
          <span>Print</span>
        </motion.button>
      </div>

      {/* Resume Content */}
      <div 
        ref={resumeRef}
        className="bg-white shadow-lg border border-neutral-200 max-w-4xl mx-auto p-8 print:shadow-none print:border-none print:p-0"
        style={{ minHeight: '297mm' }}
      >
        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-primary-500">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">
            {resumeData.personalInfo.name}
          </h1>
          <h2 className="text-xl text-primary-600 font-semibold mb-4">
            {resumeData.personalInfo.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
            <div className="space-y-2">
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
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Linkedin size={14} />
                <span>{resumeData.personalInfo.linkedin}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github size={14} />
                <span>{resumeData.personalInfo.github}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={14} />
                <span>{resumeData.personalInfo.website}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-neutral-700 leading-relaxed text-justify">
            {resumeData.summary}
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            EDUCATION
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-neutral-900">{edu.degree}</h4>
                  <p className="text-primary-600">{edu.institution}</p>
                  <p className="text-sm text-neutral-600">{edu.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-neutral-900">{edu.year}</p>
                  <p className="text-sm text-neutral-600">GPA: {edu.gpa}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700 mb-1">Relevant Coursework:</p>
                <p className="text-sm text-neutral-600">
                  {edu.relevantCourses.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            EXPERIENCE
          </h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-neutral-900">{exp.title}</h4>
                  <p className="text-primary-600">{exp.company}</p>
                  <p className="text-sm text-neutral-600">{exp.location}</p>
                </div>
                <p className="font-medium text-neutral-900">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Technical Skills</h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                {resumeData.skills.technical.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Software Proficiency</h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                {resumeData.skills.software.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Languages</h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                {resumeData.skills.languages.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            ACADEMIC PROJECTS
          </h3>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-neutral-900">{project.title}</h4>
                <p className="font-medium text-neutral-900">{project.period}</p>
              </div>
              <p className="text-sm text-neutral-700 mb-2">{project.description}</p>
              <p className="text-sm text-neutral-600">
                <span className="font-medium">Technologies:</span> {project.technologies.join(' • ')}
              </p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 mb-3 border-b border-neutral-300 pb-1">
            CERTIFICATIONS
          </h3>
          <ul className="text-sm text-neutral-700 space-y-1">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>• {cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ResumeTemplate
