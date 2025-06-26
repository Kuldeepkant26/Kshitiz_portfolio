import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare } from 'lucide-react'
import '../styles/css/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      value: "+91 90583 89713",
      href: "tel:+919058389713",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email",
      value: "kshitizsinghal93@gmail.com",
      href: "mailto:kshitizsinghal93@gmail.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: "Location",
      value: "Gurugram, Sector 48",
      href: "#",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Linkedin className="text-orange-600" size={24} />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/kshitiz-singhal-3a7456236",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! I will get back to you soon.')
    }, 2000)
  }

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
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="contact-title">
            Get In Touch
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="contact-intro"
          >
            <p className="contact-intro-text">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="contact-section-title">Contact Information</h3>
              
              <div className="contact-info-list">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ scale: 1.05 }}
                    className="contact-info-item"
                  >
                    <div className={`contact-info-icon ${contact.color.includes('blue') ? 'contact-info-icon-blue' : 
                                                        contact.color.includes('green') ? 'contact-info-icon-green' :
                                                        contact.color.includes('purple') ? 'contact-info-icon-purple' : 'contact-info-icon-orange'}`}>
                      {contact.icon}
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-title">{contact.title}</h4>
                      <p className="contact-info-value">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="contact-availability"
              >
                <h4 className="contact-availability-title">
                  <MessageSquare className="mr-2 text-blue-600" size={20} />
                  Current Availability
                </h4>
                <p className="contact-availability-text">
                  I'm currently open to new opportunities in data analytics, 
                  business operations, and growth strategy roles.
                </p>
                <div className="contact-availability-status">
                  <div className="contact-availability-indicator"></div>
                  <span className="contact-availability-label">Available for new opportunities</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="contact-section-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">
                      Your Name
                    </label>
                    <div className="contact-form-input-wrapper">
                      <User className="contact-form-icon" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email Address
                    </label>
                    <div className="contact-form-input-wrapper">
                      <Mail className="contact-form-icon" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject" className="contact-form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="contact-form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="contact-form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`contact-form-submit ${isSubmitting ? 'contact-form-submit-disabled' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact-form-spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="contact-cta"
          >
            <h3 className="contact-cta-title">Ready to Work Together?</h3>
            <p className="contact-cta-description">
              Let's discuss how my skills in business analysis, data-driven decision making, 
              and growth strategy can contribute to your organization's success.
            </p>
            <motion.a
              href="mailto:kshitizsinghal93@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="contact-cta-button"
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
