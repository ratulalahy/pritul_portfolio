'use client'

import { motion } from 'framer-motion'
import { Edit, Save, Plus, Trash2, User, Briefcase, GraduationCap, Code } from 'lucide-react'
import { useState } from 'react'

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

interface ResumeControlsProps {
  resumeData: ResumeData
  setResumeData: (data: ResumeData) => void
}

const ResumeControls = ({ resumeData, setResumeData }: ResumeControlsProps) => {
  const [activeSection, setActiveSection] = useState<string>('personal')
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'summary', name: 'Summary', icon: Edit },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'projects', name: 'Projects', icon: Edit },
    { id: 'certifications', name: 'Certifications', icon: Edit }
  ]

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    })
  }

  const handleSummaryChange = (value: string) => {
    setResumeData({
      ...resumeData,
      summary: value
    })
  }

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          title: '',
          company: '',
          location: '',
          period: '',
          responsibilities: ['']
        }
      ]
    })
  }

  const updateExperience = (index: number, field: string, value: string | string[]) => {
    const newExperience = [...resumeData.experience]
    newExperience[index] = {
      ...newExperience[index],
      [field]: value
    }
    setResumeData({
      ...resumeData,
      experience: newExperience
    })
  }

  const removeExperience = (index: number) => {
    const newExperience = resumeData.experience.filter((_, i) => i !== index)
    setResumeData({
      ...resumeData,
      experience: newExperience
    })
  }

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: '',
          period: '',
          description: '',
          technologies: []
        }
      ]
    })
  }

  const updateProject = (index: number, field: string, value: string | string[]) => {
    const newProjects = [...resumeData.projects]
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    }
    setResumeData({
      ...resumeData,
      projects: newProjects
    })
  }

  const removeProject = (index: number) => {
    const newProjects = resumeData.projects.filter((_, i) => i !== index)
    setResumeData({
      ...resumeData,
      projects: newProjects
    })
  }

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-neutral-900 mb-4">Personal Information</h3>
      {Object.entries(resumeData.personalInfo).map(([key, value]) => (
        <div key={key}>
          <label className="block text-sm font-medium text-neutral-700 mb-1 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => handlePersonalInfoChange(key, e.target.value)}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          />
        </div>
      ))}
    </div>
  )

  const renderSummary = () => (
    <div className="space-y-4">
      <h3 className="font-semibold text-neutral-900 mb-4">Professional Summary</h3>
      <textarea
        value={resumeData.summary}
        onChange={(e) => handleSummaryChange(e.target.value)}
        rows={6}
        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
        placeholder="Write a compelling professional summary..."
      />
    </div>
  )

  const renderExperience = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-neutral-900">Experience</h3>
        <motion.button
          onClick={addExperience}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 bg-primary-500 text-white px-3 py-1 rounded-md text-sm hover:bg-primary-600"
        >
          <Plus size={12} />
          <span>Add</span>
        </motion.button>
      </div>
      
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="border border-neutral-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-medium text-neutral-900">Experience {index + 1}</h4>
            <motion.button
              onClick={() => removeExperience(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={14} />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={exp.title}
              onChange={(e) => updateExperience(index, 'title', e.target.value)}
              placeholder="Job Title"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={exp.company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              placeholder="Company"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={exp.location}
              onChange={(e) => updateExperience(index, 'location', e.target.value)}
              placeholder="Location"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={exp.period}
              onChange={(e) => updateExperience(index, 'period', e.target.value)}
              placeholder="Period (e.g., Jan 2023 - Present)"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <textarea
              value={exp.responsibilities.join('\n')}
              onChange={(e) => updateExperience(index, 'responsibilities', e.target.value.split('\n'))}
              placeholder="Responsibilities (one per line)"
              rows={4}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
          </div>
        </div>
      ))}
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-neutral-900">Projects</h3>
        <motion.button
          onClick={addProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 bg-primary-500 text-white px-3 py-1 rounded-md text-sm hover:bg-primary-600"
        >
          <Plus size={12} />
          <span>Add</span>
        </motion.button>
      </div>
      
      {resumeData.projects.map((project, index) => (
        <div key={index} className="border border-neutral-200 rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-medium text-neutral-900">Project {index + 1}</h4>
            <motion.button
              onClick={() => removeProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={14} />
            </motion.button>
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              value={project.title}
              onChange={(e) => updateProject(index, 'title', e.target.value)}
              placeholder="Project Title"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={project.period}
              onChange={(e) => updateProject(index, 'period', e.target.value)}
              placeholder="Period (e.g., Fall 2023)"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <textarea
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              placeholder="Project Description"
              rows={3}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
            <input
              type="text"
              value={project.technologies.join(', ')}
              onChange={(e) => updateProject(index, 'technologies', e.target.value.split(', '))}
              placeholder="Technologies (comma separated)"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm"
            />
          </div>
        </div>
      ))}
    </div>
  )

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return renderPersonalInfo()
      case 'summary':
        return renderSummary()
      case 'experience':
        return renderExperience()
      case 'projects':
        return renderProjects()
      default:
        return <div className="text-neutral-600">Section under construction...</div>
    }
  }

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-neutral-900">Edit Resume</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors text-sm"
        >
          <Save size={14} />
          <span>Save Changes</span>
        </motion.button>
      </div>

      {/* Section Navigation */}
      <div className="space-y-2 mb-6">
        {sections.map((section) => {
          const IconComponent = section.icon
          return (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary-50 text-primary-700 border border-primary-200'
                  : 'text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              <IconComponent size={16} />
              <span className="text-sm font-medium">{section.name}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Active Section Content */}
      <div className="max-h-96 overflow-y-auto">
        {renderActiveSection()}
      </div>

      {/* Tips */}
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <h4 className="text-sm font-semibold text-neutral-900 mb-2">💡 Tips</h4>
        <ul className="text-xs text-neutral-600 space-y-1">
          <li>• Keep descriptions concise and action-oriented</li>
          <li>• Use quantifiable achievements when possible</li>
          <li>• Tailor content for your target industry</li>
          <li>• Preview changes in real-time on the right</li>
        </ul>
      </div>
    </div>
  )
}

export default ResumeControls
