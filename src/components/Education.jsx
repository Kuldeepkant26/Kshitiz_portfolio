import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import '../styles/css/Education.css'

const Education = () => {
  const educationData = [
    {
      year: "2024",
      qualification: "Bachelor of Business Administration (B.B.A.)",
      institution: "Chaudhary Charan Singh University, Meerut",
      details: "Marketing & Operations",
      grade: "Completed",
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2021",
      qualification: "Class XII (CBSE)",
      institution: "K-12 School, Bulandshahr",
      details: "Commerce Stream",
      grade: "Completed",
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2019",
      qualification: "Class X (CBSE)",
      institution: "K-12 School, Bulandshahr",
      details: "Secondary Education",
      grade: "Completed",
      color: "from-green-500 to-green-600"
    }
  ]

  const certifications = [
    {
      title: "Digital Marketing Essentials",
      provider: "E and ICT Academy, IIT Kanpur",
      icon: "🎯",
      highlight: "Distinction Certificate for Capstone Project"
    },
    {
      title: "Microsoft Office Specialist",
      provider: "32 Hour Program",
      icon: "💻",
      highlight: "Word, Excel, PowerPoint Certified"
    },
    {
      title: "Advanced Computer Education",
      provider: "ACE Institute",
      icon: "🖥️",
      highlight: "Comprehensive Computing Skills"
    }
  ]

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

  return (
    <section id="education" className="education">
      <div className="education-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="education-title">
            Education & Certifications
          </motion.h2>

          <div className="education-grid">
            {/* Education Timeline */}
            <motion.div variants={itemVariants} className="education-section">
              <h3 className="education-section-title">
                <GraduationCap className="text-blue-600" size={28} />
                Academic Journey
              </h3>

              <div className="education-timeline">
                {/* Timeline Line */}
                <div className="education-timeline-line"></div>

                <div className="education-timeline-items">
                  {educationData.map((education, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="education-timeline-item"
                    >
                      {/* Timeline Dot */}
                      <div className={`education-timeline-dot education-timeline-dot-${index === 0 ? 'blue' : index === 1 ? 'purple' : 'green'}`}></div>

                      <div className="education-card">
                        <div className="education-card-header">
                          <div className={`education-year education-year-${index === 0 ? 'blue' : index === 1 ? 'purple' : 'green'}`}>
                            <Calendar size={14} />
                            {education.year}
                          </div>
                          <div className="education-grade">{education.grade}</div>
                        </div>

                        <h4 className="education-card-title">
                          {education.qualification}
                        </h4>

                        <div className="education-card-institution">
                          <MapPin size={16} />
                          {education.institution}
                        </div>

                        <p className="education-card-details">{education.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="education-section">
              <h3 className="education-section-title">
                <Award className="text-purple-600" size={28} />
                Certifications & Training
              </h3>

              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="certification-card"
                  >
                    <div className="certification-content">
                      <div className="certification-icon">{cert.icon}</div>
                      <div className="certification-details">
                        <h4 className="certification-title">
                          {cert.title}
                        </h4>
                        <p className="certification-provider">{cert.provider}</p>
                        <div className="certification-highlight">
                          <Award size={14} />
                          {cert.highlight}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Achievement */}
              <motion.div
                variants={itemVariants}
                className="special-recognition"
              >
                <h4 className="special-recognition-title">
                  <Award className="text-yellow-500" size={20} />
                  Special Recognition
                </h4>
                <p className="special-recognition-text">
                  <strong>Distinction Certificate</strong> for IIT Kanpur Digital Marketing Capstone Project, 
                  showcasing exceptional understanding of digital marketing strategies and implementation.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Education Summary */}
          <motion.div
            variants={itemVariants}
            className="education-summary"
          >
            <h3 className="education-summary-title">
              Educational Highlights
            </h3>
            
            <div className="education-highlights-grid">
              <div className="education-highlight-card education-highlight-blue">
                <div className="education-highlight-emoji">🎓</div>
                <div className="education-highlight-title education-highlight-title-blue">BBA Graduate</div>
                <div className="education-highlight-description">Marketing & Operations</div>
              </div>
              
              <div className="education-highlight-card education-highlight-purple">
                <div className="education-highlight-emoji">🏆</div>
                <div className="education-highlight-title education-highlight-title-purple">IIT Certified</div>
                <div className="education-highlight-description">Digital Marketing</div>
              </div>
              
              <div className="education-highlight-card education-highlight-green">
                <div className="education-highlight-emoji">💼</div>
                <div className="education-highlight-title education-highlight-title-green">MS Office Expert</div>
                <div className="education-highlight-description">Certified Specialist</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
