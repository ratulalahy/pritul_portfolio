'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ResumeTemplate from '@/components/resume/ResumeTemplate'
import ResumeControls from '@/components/resume/ResumeControls'
import Navigation from '@/components/Navigation'

export default function ResumePage() {
    const [resumeData, setResumeData] = useState({
        personalInfo: {
            name: 'Toufiq Imroze',
            title: 'Textile Engineering Student',
            email: 'pritulalahy@gmail.com',
            phone: '+880 1X-XXXX-XXXX',
            location: 'Dhaka, Bangladesh',
            linkedin: 'linkedin.com/in/pritulalahy',
            github: 'github.com/pritulalahy',
            website: 'pritul-portfolio.vercel.app',
        },
        summary: 'Passionate textile engineering student with a deep interest in sustainable apparel manufacturing and innovative textile technologies. Currently pursuing graduation at NITER with hands-on experience in textile production, quality control, and modern manufacturing processes.',
        education: [
            {
                degree: 'Bachelor of Science in Textile Engineering',
                institution: 'National Institute of Textile Engineering and Research (NITER)',
                location: 'Savar, Dhaka',
                year: '2020 - 2024 (Expected)',
                gpa: '3.XX/4.00',
                relevantCourses: [
                    'Apparel Manufacturing Technology',
                    'Textile Chemistry',
                    'Fabric Structure and Design',
                    'Quality Control in Textiles',
                    'Sustainable Textile Production'
                ]
            }
        ],
        experience: [
            {
                title: 'Textile Production Intern',
                company: 'Leading Apparel Manufacturer',
                location: 'Dhaka, Bangladesh',
                period: 'June 2023 - August 2023',
                responsibilities: [
                    'Assisted in fabric quality control and testing procedures',
                    'Observed and documented manufacturing processes',
                    'Collaborated with production team on efficiency improvements',
                    'Gained hands-on experience with industrial textile machinery'
                ]
            }
        ],
        skills: {
            technical: [
                'Textile Testing & Quality Control',
                'Apparel Manufacturing Processes',
                'Fabric Design & Development',
                'CAD Software (TexPro, NedGraphics)',
                'Statistical Process Control',
                'Sustainability Assessment'
            ],
            software: [
                'Microsoft Office Suite',
                'AutoCAD',
                'SPSS',
                'Adobe Creative Suite',
                'ERP Systems'
            ],
            languages: [
                'Bengali (Native)',
                'English (Fluent)',
                'Hindi (Conversational)'
            ]
        },
        projects: [
            {
                title: 'Sustainable Cotton Fabric Development',
                period: 'Fall 2023',
                description: 'Developed eco-friendly cotton fabric with reduced water consumption and improved durability',
                technologies: ['Organic Cotton', 'Natural Dyes', 'Water-efficient Processing']
            },
            {
                title: 'Quality Control System Implementation',
                period: 'Spring 2023',
                description: 'Designed and implemented a comprehensive quality control system for textile production',
                technologies: ['Statistical Analysis', 'Process Optimization', 'Quality Standards']
            }
        ],
        certifications: [
            'Textile Testing Certification - NITER',
            'Safety in Manufacturing - OSHA',
            'Sustainable Textile Production - Online Course'
        ]
    })

    return (
        <div className="min-h-screen bg-neutral-50">
            <Navigation />
            <div className="container-width section-padding py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl font-bold gradient-text mb-4">
                        Professional Resume
                    </h1>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Customize and export your professional resume. Make edits and download as PDF.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <ResumeControls
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <ResumeTemplate resumeData={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
