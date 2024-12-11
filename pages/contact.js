import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>Get in touch with us</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Address</h2>
            <p>K.Velamavanipalle<br />Pulivendula, Andhra Pradesh 516390</p>
          </div>
          <div className={styles.card}>
            <h2>Phone</h2>
            <p>Main Office: +91 9000891439</p>
          </div>
          <div className={styles.card}>
            <h2>Email</h2>
            <p>gvm.emhs@gmail.com</p>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p> 2024 School GVM. All rights reserved.</p>
      </footer>
    </div>
  )
}