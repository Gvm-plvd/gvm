import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admissions/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Admission inquiry submitted successfully! Check your email for confirmation.');
        setFormData({
          studentName: '',
          dateOfBirth: '',
          grade: '',
          parentName: '',
          email: '',
          phone: '',
          address: '',
          previousSchool: ''
        });
      } else {
        alert('Error submitting admission inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/admissions">Admissions</Link>
        <Link href="/faculty">Faculty</Link>
        <Link href="/portal">portal</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Admissions</h1>
        
        <div className={styles.admissionsContainer}>
          <section className={styles.admissionInfo}>
            <h2>Admission Process</h2>
            <ul>
              <li>Complete the online inquiry form with accurate information</li>
              <li>Submit required documents for verification</li>
              <li>Schedule entrance assessment and interview</li>
              <li>Receive admission decision within 7 working days</li>
              <li>Complete admission formalities and fee payment</li>
            </ul>
            
            <div className={styles.contactSupport}>
              <h3>Need Help?</h3>
              <p>Contact our admissions team:</p>
              <p> +91 9000891439</p>
              <p> gvm.emhs@gmail.com</p>
            </div>
          </section>

          <form className={styles.admissionForm} onSubmit={handleSubmit}>
            <h2>Admission Inquiry Form</h2>
            
            <div className={styles.formGroup}>
              <label htmlFor="studentName">Student's Full Name *</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student's full name"
                required
              />
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="grade">Applying for Grade *</label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="parentName">Parent's/Guardian's Name *</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter parent's/guardian's full name"
                required
              />
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="address">Residential Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter complete residential address"
                required
                rows="3"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="previousSchool">Previous School (if any)</label>
              <input
                type="text"
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="Enter previous school name"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Application
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}