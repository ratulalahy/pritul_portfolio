'use client'

import { motion } from 'framer-motion'

const TextileBackground = () => {
    // Enhanced textile thread animation
    const threadVariants = {
        animate: {
            pathLength: [0, 1, 0.3, 1, 0],
            opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
            strokeWidth: [0.5, 1.5, 1, 2, 0.5],
            transition: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    // Complex fabric weave pattern animation
    const weaveVariants = {
        animate: {
            pathLength: [0, 0.7, 1, 0.4, 0],
            opacity: [0.2, 0.6, 0.4, 0.7, 0.2],
            strokeWidth: [0.3, 1.2, 0.8, 1.5, 0.3],
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }
        }
    }

    // Top to bottom thread animation
    const topToBottomVariants = {
        animate: {
            pathLength: [0, 1, 0.5, 1, 0],
            opacity: [0.2, 0.8, 0.4, 0.9, 0.2],
            strokeWidth: [0.5, 1.5, 0.8, 1.8, 0.5],
            transition: {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    // Bottom to top thread animation (reverse direction)
    const bottomToTopVariants = {
        animate: {
            pathLength: [1, 0, 0.7, 0, 1],
            opacity: [0.2, 0.9, 0.4, 0.8, 0.2],
            strokeWidth: [0.5, 1.8, 0.8, 1.5, 0.5],
            transition: {
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    // Horizontal thread animation (full width)
    const horizontalThreadVariants = {
        animate: {
            pathLength: [0, 1, 0.5, 1, 0],
            opacity: [0.2, 0.7, 0.4, 0.8, 0.2],
            strokeWidth: [0.5, 1.2, 0.8, 1.5, 0.5],
            transition: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    // Textile loom pattern animation
    const loomVariants = {
        animate: {
            pathLength: [0, 1, 0.6, 1, 0],
            opacity: [0.1, 0.4, 0.2, 0.5, 0.1],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {/* Left side enhanced textile pattern */}
            <div className="absolute left-0 top-0 w-40 h-full">
                <svg className="w-full h-full opacity-80" viewBox="0 0 120 1000">
                    <defs>
                        <linearGradient id="primaryThreadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.6" />
                            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                        </linearGradient>
                        
                        <linearGradient id="secondaryThreadGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                        </linearGradient>

                        <pattern id="textileWeave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <motion.circle
                                cx="20" cy="20" r="1"
                                fill="url(#primaryThreadGradient)"
                                animate={{ r: [0.5, 2, 0.5], opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                        </pattern>
                    </defs>

                    {/* Primary vertical threads */}
                    {[...Array(10)].map((_, i) => (
                        <motion.line
                            key={`left-primary-${i}`}
                            x1={i * 12 + 5}
                            y1="0"
                            x2={i * 12 + 5}
                            y2="1000"
                            stroke="url(#primaryThreadGradient)"
                            strokeWidth="1.2"
                            variants={threadVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.4}s` }}
                        />
                    ))}

                    {/* Secondary interwoven threads */}
                    {[...Array(8)].map((_, i) => (
                        <motion.line
                            key={`left-secondary-${i}`}
                            x1={i * 15 + 8}
                            y1="0"
                            x2={i * 15 + 8}
                            y2="1000"
                            stroke="url(#secondaryThreadGradient)"
                            strokeWidth="0.8"
                            variants={threadVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.6}s` }}
                        />
                    ))}

                    {/* Complex horizontal weave patterns */}
                    {[...Array(50)].map((_, i) => (
                        <motion.path
                            key={`left-weave-${i}`}
                            d={`M0,${i * 20} Q30,${i * 20 + 8} 60,${i * 20} T120,${i * 20 + 3}`}
                            stroke="url(#primaryThreadGradient)"
                            strokeWidth="0.6"
                            fill="none"
                            variants={weaveVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}

                    {/* Loom pattern overlay */}
                    {[...Array(25)].map((_, i) => (
                        <motion.path
                            key={`left-loom-${i}`}
                            d={`M0,${i * 40 + 20} Q60,${i * 40 + 35} 120,${i * 40 + 20}`}
                            stroke="url(#secondaryThreadGradient)"
                            strokeWidth="0.4"
                            fill="none"
                            variants={loomVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.8}s` }}
                        />
                    ))}

                    {/* Textile weave pattern background */}
                    <rect width="100%" height="100%" fill="url(#textileWeave)" opacity="0.1" />
                </svg>

                {/* Clean textile side */}
            </div>

            {/* Right side enhanced textile pattern */}
            <div className="absolute right-0 top-0 w-40 h-full">
                <svg className="w-full h-full opacity-80" viewBox="0 0 120 1000">
                    <defs>
                        <linearGradient id="rightPrimaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.6" />
                            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                        </linearGradient>
                        
                        <linearGradient id="rightSecondaryGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    {/* Primary vertical threads */}
                    {[...Array(10)].map((_, i) => (
                        <motion.line
                            key={`right-primary-${i}`}
                            x1={i * 12 + 5}
                            y1="0"
                            x2={i * 12 + 5}
                            y2="1000"
                            stroke="url(#rightPrimaryGradient)"
                            strokeWidth="1.2"
                            variants={threadVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.5}s` }}
                        />
                    ))}

                    {/* Secondary interwoven threads */}
                    {[...Array(8)].map((_, i) => (
                        <motion.line
                            key={`right-secondary-${i}`}
                            x1={i * 15 + 8}
                            y1="0"
                            x2={i * 15 + 8}
                            y2="1000"
                            stroke="url(#rightSecondaryGradient)"
                            strokeWidth="0.8"
                            variants={threadVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.7}s` }}
                        />
                    ))}

                    {/* Complex horizontal weave patterns */}
                    {[...Array(50)].map((_, i) => (
                        <motion.path
                            key={`right-weave-${i}`}
                            d={`M0,${i * 20} Q30,${i * 20 - 8} 60,${i * 20} T120,${i * 20 - 3}`}
                            stroke="url(#rightPrimaryGradient)"
                            strokeWidth="0.6"
                            fill="none"
                            variants={weaveVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.18}s` }}
                        />
                    ))}

                    {/* Loom pattern overlay */}
                    {[...Array(25)].map((_, i) => (
                        <motion.path
                            key={`right-loom-${i}`}
                            d={`M0,${i * 40 + 20} Q60,${i * 40 + 30} 120,${i * 40 + 20}`}
                            stroke="url(#rightSecondaryGradient)"
                            strokeWidth="0.4"
                            fill="none"
                            variants={loomVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 0.9}s` }}
                        />
                    ))}

                    {/* Textile weave pattern background */}
                    <rect width="100%" height="100%" fill="url(#textileWeave)" opacity="0.1" />
                </svg>

                {/* Clean textile side */}
            </div>

            {/* Extended left side vertical threads */}
            <div className="absolute left-4 top-0 w-40 h-full">
                <svg className="w-full h-full opacity-20" viewBox="0 0 120 1000">
                    {/* Alternating vertical threads - left extended area */}
                    {[...Array(6)].map((_, i) => (
                        <motion.line
                            key={`left-extended-${i}`}
                            x1={i * 20 + 10}
                            y1="0"
                            x2={i * 20 + 10}
                            y2="1000"
                            stroke={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                            strokeWidth="3"
                            opacity="0.15"
                            variants={i % 2 === 0 ? topToBottomVariants : bottomToTopVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 1.2}s` }}
                        />
                    ))}
                </svg>
            </div>

            {/* Extended right side vertical threads */}
            <div className="absolute right-4 top-0 w-40 h-full">
                <svg className="w-full h-full opacity-20" viewBox="0 0 120 1000">
                    {/* Alternating vertical threads - right extended area */}
                    {[...Array(6)].map((_, i) => (
                        <motion.line
                            key={`right-extended-${i}`}
                            x1={i * 20 + 10}
                            y1="0"
                            x2={i * 20 + 10}
                            y2="1000"
                            stroke={i % 2 === 0 ? "#ec4899" : "#f59e0b"}
                            strokeWidth="3"
                            opacity="0.15"
                            variants={i % 2 === 0 ? bottomToTopVariants : topToBottomVariants}
                            animate="animate"
                            style={{ animationDelay: `${i * 1.5}s` }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    )
}

export default TextileBackground
