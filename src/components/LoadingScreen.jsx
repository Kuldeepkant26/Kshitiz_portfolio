import React from 'react'
import { motion } from 'framer-motion'
import '../styles/css/LoadingScreen.css'
import profileImage from '../assets/Kshitiz_image.jpeg'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      {/* Background Animation */}
      <div className="loading-bg">
        <div className="loading-blob loading-blob-1"></div>
        <div className="loading-blob loading-blob-2"></div>
        <div className="loading-blob loading-blob-3"></div>
      </div>

      <div className="loading-content">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="loading-logo"
        >
          <img 
            src={profileImage} 
            alt="Kshitiz Singhal" 
            className="loading-profile-image"
          />
        </motion.div>

        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="loading-title"
        >
          Kshitiz Singhal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="loading-subtitle"
        >
          Business Growth Executive & Data Analytics Enthusiast
        </motion.p>

        {/* Loading Animation */}
        <div className="loading-dots">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              backgroundColor: ['#3B82F6', '#8B5CF6', '#3B82F6']
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0
            }}
            className="loading-dot loading-dot-1"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              backgroundColor: ['#8B5CF6', '#3B82F6', '#8B5CF6']
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2
            }}
            className="loading-dot loading-dot-2"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              backgroundColor: ['#3B82F6', '#8B5CF6', '#3B82F6']
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4
            }}
            className="loading-dot loading-dot-3"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="loading-message"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
