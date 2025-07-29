'use client'
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm({ 
  title = "Get In Touch", 
  subtitle = "Ready to transform your outdoor space? Let's discuss your garden dreams.",
  className = "" 
}) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
    const digitsOnly = cleanedPhone.replace(/[\+]/g, '');
    
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    if (digitsOnly.length < 7) {
      return 'Phone number must be at least 7 digits long';
    }
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      return 'Please enter a valid phone number';
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const phoneError = validatePhone(formData.phoneNumber);
    if (phoneError) {
      setErrors({ phoneNumber: phoneError });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/contact/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ phoneNumber: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        if (result.error) {
          if (result.error.includes('phone')) {
            setErrors({ phoneNumber: result.error });
          } else {
            setErrors({ general: result.error });
          }
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.contactForm} ${className}`}>
      <div className={styles.formHeader}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Phone Number Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Your number here"
            className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ''}`}
            disabled={isSubmitting}
          />
          {errors.phoneNumber && (
            <span className={styles.errorMessage}>{errors.phoneNumber}</span>
          )}
        </div>

        {/* Message Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your garden dreams, property size, style preferences, or any questions you have..."
            rows="4"
            className={styles.textarea}
            disabled={isSubmitting}
          />
        </div>

        {/* General Error */}
        {errors.general && (
          <div className={styles.errorMessage}>{errors.general}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
        >
          <span className={styles.btnText}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <span className={styles.btnIcon}>🌱</span>
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className={`${styles.statusMessage} ${styles.successMessage}`}>
            <span className={styles.statusIcon}>✨</span>
            Thank you! We have received your message and will contact you soon to discuss your garden project.
          </div>
        )}

        {/* Error Status */}
        {submitStatus === 'error' && !errors.general && (
          <div className={`${styles.statusMessage} ${styles.errorStatusMessage}`}>
            <span className={styles.statusIcon}>🌿</span>
            Something went wrong. Please try again or call us directly at (440) 313-8489.
          </div>
        )}
      </form>
    </div>
  );
}