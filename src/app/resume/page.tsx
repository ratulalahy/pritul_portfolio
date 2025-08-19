'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ResumeTemplate from '@/components/resume/ResumeTemplate'
import AdminLogin from '@/components/AdminLogin'
import Navigation from '@/components/Navigation'
import { Settings, LogOut, ChevronDown, ChevronUp, User } from 'lucide-react'

export default function ResumePage() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [isControlsCollapsed, setIsControlsCollapsed] = useState(true)
    const [showLogin, setShowLogin] = useState(false)
    
    const [resumeData, setResumeData] = useState({
        personalInfo: {
            name: 'Taufiq Imroze',
            title: 'Textile Engineering Student',
            email: 'taufiq.imroze@email.com',
            phone: '+880 1X-XXXX-XXXX',
            location: 'Dhaka, Bangladesh',
            linkedin: 'linkedin.com/in/taufiq-imroze',
            website: 'taufiq-imroze-portfolio.vercel.app',
            includePhoto: false
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
                    'Textile Chemistry and Processing',
                    'Fabric Structure and Design',
                    'Quality Control in Textiles',
                    'Sustainable Textile Production',
                    'Garment Production and Management'
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
                    'Assisted in quality control processes for fabric inspection and testing',
                    'Monitored production lines for efficiency and quality standards',
                    'Participated in garment sampling and prototype development',
                    'Learned sustainable manufacturing practices and waste reduction techniques'
                ]
            },
            {
                title: 'Research Assistant',
                company: 'NITER Textile Research Lab',
                location: 'Savar, Dhaka',
                period: 'Jan 2023 - Present',
                responsibilities: [
                    'Conducted research on eco-friendly textile dyeing processes',
                    'Analyzed fabric properties using various testing equipment',
                    'Assisted senior researchers in sustainable textile development projects',
                    'Documented research findings and contributed to academic publications'
                ]
            }
        ],
        skills: {
            technical: [
                'Textile Production Management',
                'Fabric Analysis & Testing',
                'Quality Control Systems',
                'Garment Construction',
                'Dyeing & Finishing Processes',
                'Sustainable Manufacturing'
            ],
            software: [
                'Microsoft Office Suite',
                'AutoCAD',
                'Adobe Illustrator',
                'Kaledo (Textile Design)',
                'Optitex (Pattern Making)',
                'Statistical Process Control Software'
            ],
            languages: [
                'Bengali (Native)',
                'English (Fluent)',
                'Hindi (Conversational)'
            ]
        },
        projects: [
            {
                title: 'Sustainable Fabric Development Project',
                period: '2023',
                description: 'Led a team project to develop eco-friendly fabric using recycled cotton fibers. Achieved 30% reduction in water usage during production while maintaining fabric quality standards.',
                technologies: ['Recycled Fibers', 'Water Conservation', 'Quality Testing', 'Sustainability Analysis']
            },
            {
                title: 'Garment Production Optimization Study',
                period: '2023',
                description: 'Analyzed production workflows in local garment factories to identify bottlenecks and improve efficiency. Proposed solutions that could increase productivity by 15%.',
                technologies: ['Production Planning', 'Workflow Analysis', 'Efficiency Optimization', 'Statistical Analysis']
            },
            {
                title: 'Textile Waste Reduction Initiative',
                period: '2022-2023',
                description: 'Developed innovative methods to repurpose textile waste into new products. Created a framework for circular economy implementation in textile manufacturing.',
                technologies: ['Waste Management', 'Circular Economy', 'Innovation', 'Environmental Impact Assessment']
            }
        ],
        certifications: [
            'Sustainable Textile Manufacturing Certificate - Bangladesh Textile Institute',
            'Quality Control in Textiles - Professional Development Course',
            'Workplace Safety in Manufacturing - BGMEA Certification',
            'Environmental Compliance in Textile Industry - BSTI Certified',
            'Leadership in Sustainability - University Workshop Certificate'
        ]
    })

    // Check admin login status on mount
    useEffect(() => {
        const adminStatus = sessionStorage.getItem('isAdminLoggedIn')
        if (adminStatus === 'true') {
            setIsAdminLoggedIn(true)
        }
    }, [])

    const handleAdminLogin = () => {
        setIsAdminLoggedIn(true)
        setShowLogin(false)
        sessionStorage.setItem('isAdminLoggedIn', 'true')
    }

    const handleAdminLogout = () => {
        setIsAdminLoggedIn(false)
        setIsEditMode(false)
        setIsControlsCollapsed(true)
        sessionStorage.removeItem('isAdminLoggedIn')
    }

    const handleInputChange = (path: string, value: any) => {
        setResumeData(prev => {
            const newData = { ...prev }
            const keys = path.split('.')
            let current: any = newData
            
            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]]
            }
            
            current[keys[keys.length - 1]] = value
            return newData
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
            <Navigation />
            
            <div className="pt-20">
                {/* Admin Controls */}
                {isAdminLoggedIn && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200"
                    >
                        {/* Collapsed Header */}
                        <div 
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
                        >
                            <div className="flex items-center space-x-2">
                                <Settings size={20} className="text-blue-600" />
                                <span className="font-medium text-gray-900">Admin Controls</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                {isControlsCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                            </div>
                        </div>

                        {/* Expanded Controls */}
                        {!isControlsCollapsed && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                className="border-t border-gray-200"
                            >
                                <div className="p-4 space-y-3">
                                    {/* Photo Toggle */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">Include Photo</span>
                                        <button
                                            onClick={() => handleInputChange('personalInfo.includePhoto', !resumeData.personalInfo.includePhoto)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                resumeData.personalInfo.includePhoto ? 'bg-blue-600' : 'bg-gray-200'
                                            }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    resumeData.personalInfo.includePhoto ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Edit Mode Toggle */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">Edit Mode</span>
                                        <button
                                            onClick={() => setIsEditMode(!isEditMode)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                isEditMode ? 'bg-blue-600' : 'bg-gray-200'
                                            }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    isEditMode ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Logout Button */}
                                    <button
                                        onClick={handleAdminLogout}
                                        className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {/* Login Button for Non-Admin */}
                {!isAdminLoggedIn && (
                    <div className="fixed top-20 right-4 z-50">
                        <motion.button
                            onClick={() => setShowLogin(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            <User size={16} />
                            <span>Admin Login</span>
                        </motion.button>
                    </div>
                )}

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8">
                    <ResumeTemplate resumeData={resumeData} />
                </div>

                {/* Admin Login Modal */}
                {showLogin && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setShowLogin(false)
                            }
                        }}
                    >
                        <div className="relative">
                            <AdminLogin
                                onLogin={handleAdminLogin}
                            />
                            <button
                                onClick={() => setShowLogin(false)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
