import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Star, Users, Target, Zap } from 'lucide-react'
import '../styles/css/Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: "IIT Kanpur Digital Marketing Distinction",
      description: "Received distinction certificate for exceptional performance in the digital marketing capstone project",
      icon: <Award className="text-yellow-500" size={32} />,
      category: "Academic Excellence",
      year: "2024",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Best Presentation Award",
      description: "Won 'Best Presentation' award in operations management project expo for innovative business solutions",
      icon: <Trophy className="text-purple-500" size={32} />,
      category: "Project Excellence",
      year: "2023",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Cricket Team Captain & Runner-up",
      description: "Captained inter-department cricket squad to runner-up position, demonstrating leadership and teamwork",
      icon: <Users className="text-green-500" size={32} />,
      category: "Leadership & Sports",
      year: "2023",
      color: "from-green-400 to-blue-500"
    }
  ]

  const activities = [
    {
      title: "Team Sports",
      items: ["Cricket", "Badminton"],
      icon: "🏏",
      description: "Active participant in team sports, developing teamwork and leadership skills"
    },
    {
      title: "Fitness & Wellness",
      items: ["Regular Gym", "Weight Training"],
      icon: "💪",
      description: "Committed to personal fitness and maintaining a healthy lifestyle"
    },
    {
      title: "Community Service",
      items: ["NGO Volunteer", "Local Events"],
      icon: "🤝",
      description: "Volunteer with local NGO events, contributing to community development"
    }
  ]

  const highlights = [
    {
      metric: "3+",
      label: "Major Awards",
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      metric: "5+",
      label: "Team Projects",
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      metric: "2+",
      label: "Sports Leadership",
      icon: <Target className="text-green-500" size={24} />
    },
    {
      metric: "10+",
      label: "Community Events",
      icon: <Star className="text-purple-500" size={24} />
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
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="achievements-title">
            Achievements & Activities
          </motion.h2>

          {/* Major Achievements */}
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="achievement-card"
              >
                {/* Background Gradient */}
                <div className={`achievement-card-gradient achievement-card-gradient-${index === 0 ? 'yellow' : index === 1 ? 'purple' : 'green'}`}></div>
                
                <div className="achievement-card-header">
                  <div className="achievement-icon-wrapper">
                    {achievement.icon}
                  </div>
                  <span className="achievement-category">
                    {achievement.category}
                  </span>
                  <div className="achievement-year">{achievement.year}</div>
                </div>

                <h3 className="achievement-card-title">
                  {achievement.title}
                </h3>
                
                <p className="achievement-card-description">
                  {achievement.description}
                </p>

                {/* Decorative Element */}
                <div className="achievement-decorative"></div>
              </motion.div>
            ))}
          </div>

          {/* Activities & Interests */}
          <motion.div variants={itemVariants} className="activities-section">
            <h3 className="activities-title">
              <Zap className="text-blue-600" size={28} />
              Activities & Interests
            </h3>

            <div className="activities-grid">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="activity-card"
                >
                  <div className="activity-header">
                    <div className="activity-emoji">{activity.icon}</div>
                    <h4 className="activity-title">{activity.title}</h4>
                  </div>

                  <div className="activity-items">
                    {activity.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="activity-item"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="activity-description">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Highlights */}
          <motion.div
            variants={itemVariants}
            className="achievements-highlights"
          >
            <h3 className="achievements-highlights-title">Achievement Highlights</h3>
            
            <div className="achievements-highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="achievements-highlight-item"
                >
                  <div className="achievements-highlight-icon">
                    {highlight.icon}
                  </div>
                  <div className="achievements-highlight-metric">{highlight.metric}</div>
                  <div className="achievements-highlight-label">{highlight.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Quote */}
          <motion.div
            variants={itemVariants}
            className="achievements-quote"
          >
            <div className="achievements-quote-emoji">💡</div>
            <blockquote className="achievements-quote-text">
              "Success is not just about individual achievements, but about lifting others up 
              and creating positive impact in every team and community I'm part of."
            </blockquote>
            <div className="achievements-quote-author">- Leadership Philosophy</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
