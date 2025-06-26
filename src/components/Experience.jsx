import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, TrendingUp, Building, Users } from 'lucide-react'
import '../styles/css/Experience.css'

const Experience = () => {
  const currentRole = {
    title: "Business Growth Executive",
    company: "Naturally Good Organization",
    location: "Gurugram",
    period: "Current Position",
    type: "Full-time",
    description: "Driving strategic business growth initiatives and operational excellence in the health and wellness sector.",
    responsibilities: [
      "Develop and implement business growth strategies to expand market reach",
      "Analyze market trends and customer data to identify growth opportunities",
      "Collaborate with cross-functional teams to optimize operational processes",
      "Monitor KPIs and prepare detailed reports for management decision-making",
      "Build and maintain relationships with key stakeholders and partners",
      "Lead initiatives to improve customer satisfaction and retention"
    ],
    skills: ["Business Strategy", "Data Analysis", "Market Research", "Team Leadership", "Client Relations"]
  }

  const experiences = [
    {
      icon: "📊",
      title: "Data-Driven Decision Making",
      description: "Utilized Excel and analytics tools to process business data and generate actionable insights"
    },
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "Contributed to developing comprehensive business strategies for sustainable growth"
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Worked closely with diverse teams to implement growth initiatives and operational improvements"
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description: "Monitored and analyzed key performance metrics to drive continuous improvement"
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
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="experience-title">
            Professional Experience
          </motion.h2>

          {/* Current Role - Main Experience */}
          <motion.div
            variants={itemVariants}
            className="experience-main"
          >
            <div className="experience-main-grid">
              {/* Role Details */}
              <div className="experience-role-details">
                <div className="experience-role-header">
                  <div className="experience-role-info">
                    <h3 className="experience-role-title">
                      {currentRole.title}
                    </h3>
                    <div className="experience-role-meta">
                      <div className="experience-role-meta-item">
                        <Building size={16} className="mr-1" />
                        {currentRole.company}
                      </div>
                      <div className="experience-role-meta-item">
                        <MapPin size={16} className="mr-1" />
                        {currentRole.location}
                      </div>
                    </div>
                    <div className="experience-badges">
                      <span className="experience-badge experience-badge-green">
                        <Calendar size={14} className="mr-1" />
                        {currentRole.period}
                      </span>
                      <span className="experience-badge experience-badge-blue">
                        {currentRole.type}
                      </span>
                    </div>
                  </div>
                  <div className="experience-icon">💼</div>
                </div>

                <p className="experience-description">
                  {currentRole.description}
                </p>

                <h4 className="experience-section-subtitle">Key Responsibilities:</h4>
                <ul className="experience-responsibilities">
                  {currentRole.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="experience-responsibility-item"
                    >
                      <TrendingUp size={16} className="experience-responsibility-icon" />
                      <span className="experience-responsibility-text">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="experience-skills-section">
                  <h4 className="experience-section-subtitle">Core Skills Applied:</h4>
                  <div className="experience-skills-list">
                    {currentRole.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="experience-skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="experience-highlights">
                <h4 className="experience-highlights-title">Experience Highlights</h4>
                <div className="experience-highlights-list">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="experience-highlight-item"
                    >
                      <div className="experience-highlight-content">
                        <div className="experience-highlight-emoji">{exp.icon}</div>
                        <div className="experience-highlight-text">
                          <h5 className="experience-highlight-title">{exp.title}</h5>
                          <p className="experience-highlight-description">{exp.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Objective */}
          <motion.div
            variants={itemVariants}
            className="experience-objective"
          >
            <div className="experience-objective-content">
              <h3 className="experience-objective-title">Career Objective</h3>
              <p className="experience-objective-description">
                Seeking an entry-level analytics or operations role where I can leverage my business 
                administration background, data analysis skills, and practical experience to convert 
                data into actionable insights that drive organizational growth and success.
              </p>

              <div className="experience-objective-grid">
                <div className="experience-objective-item experience-objective-item-blue">
                  <Users className="experience-objective-icon experience-objective-icon-blue" size={32} />
                  <h4 className="experience-objective-item-title">Team Leadership</h4>
                  <p className="experience-objective-item-description">Building and leading cross-functional teams</p>
                </div>

                <div className="experience-objective-item experience-objective-item-purple">
                  <TrendingUp className="experience-objective-icon experience-objective-icon-purple" size={32} />
                  <h4 className="experience-objective-item-title">Growth Strategy</h4>
                  <p className="experience-objective-item-description">Developing data-driven growth initiatives</p>
                </div>

                <div className="experience-objective-item experience-objective-item-green">
                  <Briefcase className="experience-objective-icon experience-objective-icon-green" size={32} />
                  <h4 className="experience-objective-item-title">Operational Excellence</h4>
                  <p className="experience-objective-item-description">Optimizing processes for efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
