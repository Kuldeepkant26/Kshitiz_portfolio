import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, Linkedin, MapPin, ArrowUp } from 'lucide-react'
import '../styles/css/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:kshitizsinghal93@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone size={20} />,
      href: "tel:+919058389713",
      label: "Phone"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* Background Pattern */}
      <div className="footer-bg">
        <div className="footer-bg-gradient"></div>
        <div className="footer-bg-pattern"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <h3 className="footer-brand-title">
              Kshitiz Singhal
            </h3>
            <p className="footer-brand-description">
              Business Growth Executive passionate about data-driven decision making 
              and operational excellence. Ready to contribute to your organization's success.
            </p>
            <div className="footer-brand-location">
              <MapPin size={16} className="mr-2" />
              <span>Gurugram, Sector 48, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="footer-links"
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <div className="footer-links-list">
              {['About', 'Skills', 'Education', 'Experience', 'Achievements', 'Contact'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="footer-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="footer-contact"
          >
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                kshitizsinghal93@gmail.com
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                +91 90583 89713
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <div className="footer-social-icon">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="footer-copyright"
          >
            <p className="footer-copyright-text">
              © {currentYear} Kshitiz Singhal. Made with{' '}
              <Heart size={16} className="footer-heart-icon" />
              and React
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="footer-back-to-top"
          >
            <ArrowUp size={16} className="footer-arrow-icon" />
            <span className="footer-back-to-top-text">Back to Top</span>
          </motion.button>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="footer-progress"
        style={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </footer>
  )
}

export default Footer
