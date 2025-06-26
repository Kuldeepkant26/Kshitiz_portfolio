import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Linkedin, MapPin, Phone } from 'lucide-react'
import '../styles/css/Hero.css'
import profileImage from '../assets/Kshitiz_image2.jpeg'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      // Calculate offset for fixed navbar with extra padding for mobile
      const navbarHeight = 80
      const extraOffset = window.innerWidth <= 768 ? 20 : 0
      const elementPosition = aboutSection.offsetTop - navbarHeight - extraOffset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="hero">
      {/* Background Animation */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hero-profile"
          >
            <div className="hero-profile-wrapper">
              <div className="hero-profile-inner">
                <img 
                  src={profileImage} 
                  alt="Kshitiz Singhal" 
                  className="hero-profile-image"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            Kshitiz Singhal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-subtitle"
          >
            <span className="hero-role">
              Business Growth Executive
            </span>
            <br />
            <span>Data Analytics Enthusiast</span>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-contact"
          >
            <div className="hero-contact-item">
              <Phone size={16} />
              <span>+91 90583 89713</span>
            </div>
            <div className="hero-contact-item">
              <Mail size={16} />
              <span>kshitizsinghal93@gmail.com</span>
            </div>
            <div className="hero-contact-item">
              <MapPin size={16} />
              <span>Gurugram, Sector 48</span>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-summary"
          >
            Business administration graduate with a solid foundation in MS Excel and data-driven decision making. 
            Currently working as Business Growth Executive at Naturally Good Organization, seeking to leverage 
            analytics skills to convert data into actionable insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hero-cta"
          >
            <button className="hero-btn hero-btn-primary">
              <Download size={18} />
              Download Resume
            </button>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-outline"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="hero-scroll"
          >
            <button
              onClick={scrollToNext}
              className="hero-scroll-btn"
            >
              <ChevronDown size={32} className="bounce" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
