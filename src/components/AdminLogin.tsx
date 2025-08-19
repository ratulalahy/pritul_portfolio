'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface AdminLoginProps {
  onLogin: () => void
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    // Simple password check - in production, use environment variable
    if (password === 'admin123') {
      onLogin()
      setError('')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Access Required</h2>
          <p className="text-gray-600">Enter password to edit resume content</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm font-medium"
            >
              {error}
            </motion.p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>For demo: use password "admin123"</p>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminLogin
