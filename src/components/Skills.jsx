import React from 'react'
import { motion } from 'framer-motion'
import { 
  FileSpreadsheet, 
  FileText, 
  Presentation, 
  BarChart3, 
  Users, 
  Mic, 
  Globe, 
  Languages,
  TrendingUp,
  PieChart
} from 'lucide-react'
import '../styles/css/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Tools",
      icon: <BarChart3 className="text-blue-600" size={24} />,
      skills: [
        { name: "MS Excel", level: 90, icon: <FileSpreadsheet size={16} /> },
        { name: "Pivot Tables", level: 85, icon: <PieChart size={16} /> },
        { name: "Dashboards", level: 80, icon: <TrendingUp size={16} /> },
        { name: "Data Cleaning", level: 75, icon: <BarChart3 size={16} /> }
      ]
    },
    {
      title: "Microsoft Office",
      icon: <FileText className="text-purple-600" size={24} />,
      skills: [
        { name: "MS Word", level: 95, icon: <FileText size={16} /> },
        { name: "PowerPoint", level: 90, icon: <Presentation size={16} /> },
        { name: "Office Specialist", level: 88, icon: <FileSpreadsheet size={16} /> }
      ]
    },
    {
      title: "Analytics & Business",
      icon: <TrendingUp className="text-green-600" size={24} />,
      skills: [
        { name: "Descriptive Statistics", level: 80, icon: <BarChart3 size={16} /> },
        { name: "Digital Marketing", level: 85, icon: <Globe size={16} /> },
        { name: "Customer Segmentation", level: 75, icon: <Users size={16} /> },
        { name: "Business Operations", level: 82, icon: <TrendingUp size={16} /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-orange-600" size={24} />,
      skills: [
        { name: "Team Collaboration", level: 92, icon: <Users size={16} /> },
        { name: "Public Speaking", level: 85, icon: <Mic size={16} /> },
        { name: "Adaptability", level: 90, icon: <TrendingUp size={16} /> },
        { name: "Leadership", level: 80, icon: <Users size={16} /> }
      ]
    }
  ]

  const languages = [
    { name: "Hindi", level: "Native", flag: "🇮🇳" },
    { name: "English", level: "Fluent", flag: "🇬🇧" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="skills-title">
            Core Skills & Expertise
          </motion.h2>

          {/* Skills Categories */}
          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="skills-category"
              >
                <div className="skills-category-header">
                  <div className="skills-category-icon">
                    {category.icon}
                  </div>
                  <h3 className="skills-category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-name">
                          <span className="text-gray-600">{skill.icon}</span>
                          <span className="skill-name-text">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          className="skill-progress-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            variants={itemVariants}
            className="skills-languages"
          >
            <div className="skills-languages-header">
              <div className="skills-languages-icon">
                <Languages className="text-blue-600" size={24} />
              </div>
              <h3 className="skills-languages-title">Languages</h3>
            </div>

            <div className="skills-languages-grid">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="language-card"
                >
                  <div className="language-flag">{language.flag}</div>
                  <h4 className="language-name">{language.name}</h4>
                  <p className="language-level">{language.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="skills-summary"
          >
            <h3 className="skills-summary-title">
              Professional Expertise Summary
            </h3>
            <p className="skills-summary-description">
              With a strong foundation in data tools like MS Excel and business analytics, 
              combined with practical experience in digital marketing and team collaboration, 
              I bring a well-rounded skill set to drive data-driven business decisions and 
              operational excellence.
            </p>
            
            <div className="skills-stats">
              <div className="skill-stat">
                <div className="skill-stat-number skill-stat-blue">4+</div>
                <div className="skill-stat-label">Years Experience</div>
              </div>
              <div className="skill-stat">
                <div className="skill-stat-number skill-stat-purple">10+</div>
                <div className="skill-stat-label">Technical Skills</div>
              </div>
              <div className="skill-stat">
                <div className="skill-stat-number skill-stat-green">5+</div>
                <div className="skill-stat-label">Certifications</div>
              </div>
              <div className="skill-stat">
                <div className="skill-stat-number skill-stat-orange">2</div>
                <div className="skill-stat-label">Languages</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
