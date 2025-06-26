import React from 'react'
import { motion } from 'framer-motion'
import { User, Target, Lightbulb, TrendingUp } from 'lucide-react'
import '../styles/css/About.css'
import profileImage from '../assets/Kshitiz_image.jpeg'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const highlights = [
    {
      icon: <User className="text-blue-600" size={24} />,
      title: "Professional Background",
      description: "Business Administration graduate with practical experience in business growth and operations."
    },
    {
      icon: <Target className="text-purple-600" size={24} />,
      title: "Current Role",
      description: "Business Growth Executive at Naturally Good Organization, driving strategic initiatives and growth."
    },
    {
      icon: <Lightbulb className="text-green-600" size={24} />,
      title: "Continuous Learning",
      description: "Completed IIT Kanpur digital marketing coursework and Microsoft Office specializations."
    },
    {
      icon: <TrendingUp className="text-orange-600" size={24} />,
      title: "Future Goals",
      description: "Seeking entry-level analytics or operations role to convert data into actionable insights."
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="about-title">
            About Me
          </motion.h2>

          <div className="about-grid">
            {/* Left Column - Image and Personal Info */}
            <motion.div variants={itemVariants} className="about-left">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <img 
                    src={profileImage} 
                    alt="Kshitiz Singhal" 
                    className="about-profile-image"
                  />
                </div>
                {/* Floating Elements */}
                <div className="about-floating-element about-floating-1">
                  📊
                </div>
                <div className="about-floating-element about-floating-2">
                  📈
                </div>
              </div>

              <div className="about-personal-details">
                <h3 className="about-personal-title">Personal Details</h3>
                <div className="about-personal-info">
                  <p><strong>Date of Birth:</strong> 15 June 2003</p>
                  <p><strong>Nationality:</strong> Indian</p>
                  <p><strong>Languages:</strong> Hindi (Native), English (Fluent)</p>
                  <p><strong>Location:</strong> Gurugram, Sector 48</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description and Highlights */}
            <motion.div variants={itemVariants} className="about-right">
              <div className="about-prose">
                <p className="about-description">
                  I am a passionate business professional with a strong foundation in data analysis and business operations. 
                  My journey began with a Bachelor's in Business Administration, where I developed a keen interest in 
                  data-driven decision making and digital marketing strategies.
                </p>
                
                <p className="about-description">
                  Currently serving as a Business Growth Executive at Naturally Good Organization in Gurugram, 
                  I have hands-on experience in driving business growth initiatives and implementing strategic operations. 
                  My academic achievements include certifications from IIT Kanpur and Microsoft Office specializations.
                </p>

                <p className="about-description">
                  I am actively up-skilling in data analytics to transition into roles where I can leverage data 
                  to create meaningful business insights and drive organizational success.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="about-highlights">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="about-highlight-card"
                  >
                    <div className="about-highlight-content">
                      <div className="about-highlight-icon">
                        {highlight.icon}
                      </div>
                      <div className="about-highlight-text">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
