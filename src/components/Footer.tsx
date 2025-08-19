'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            icon: Github,
            name: "GitHub",
            url: "https://github.com",
            color: "hover:text-neutral-800"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://linkedin.com",
            color: "hover:text-blue-600"
        },
        {
            icon: Mail,
            name: "Email",
            url: "mailto:pritul.rahman@example.com",
            color: "hover:text-primary-600"
        }
    ]

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "/resume" }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
                <footer className="bg-transparent border-t border-slate-200/30 text-slate-600">
            <div className="container-width section-padding">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Taufiq Imroze
                        </h3>
                        <p className="text-slate-500 leading-relaxed">
                            Textile Engineering student passionate about sustainable manufacturing
                            and innovative apparel technologies.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 ${social.color} transition-all duration-300 hover:bg-slate-50 hover:shadow-md`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-800">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-800">
                        </h4>
                        <div className="space-y-3">
                            <div>
                                <p className="text-slate-500 text-sm">Email</p>
                                <a
                                    href="mailto:pritulalahy@gmail.com"
                                    className="text-blue-600 hover:text-indigo-600 transition-colors"
                                >
                                    pritulalahy@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Location</p>
                                <p className="text-slate-600">Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">University</p>
                                <p className="text-slate-600">NITER</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200"></div>

                {/* Bottom Footer */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                        <span>© {currentYear} Taufiq Alahy. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>and Next.js</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        {/* Note: Scroll to top button moved to fixed position */}
                    </div>
                </div>

                {/* Technologies Used */}
                {/* <div className="border-t border-slate-200 pt-6">
                    <div className="text-center">
                        <p className="text-slate-500 text-xs mb-2">
                            Built with modern technologies
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Inspirational Quote */}
                <div className="text-center mt-8 pt-6 border-t border-slate-200">
                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-slate-600 italic text-sm max-w-2xl mx-auto"
                    >
                        &quot;The future of fashion lies in sustainable innovation and responsible manufacturing.
                        Every thread we weave today shapes the world we leave tomorrow.&quot;
                    </motion.blockquote>
                    <p className="text-slate-500 text-xs mt-2">- Philosophy on Sustainable Textiles</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
