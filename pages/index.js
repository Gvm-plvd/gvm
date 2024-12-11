import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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

      <div className={styles.heroSection}>
        <div>
          <h1 className={styles.title}>Welcome to G Venkatappa Memorial High School</h1>
          <p className={styles.description}>Empowering minds, Building futures</p>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/vision.jpg"
                alt="School Vision"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <h2>Our Vision</h2>
            <p>To provide quality education and shape future leaders</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/programs.jpg"
                alt="School Programs"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Programs</h2>
            <p>Offering comprehensive education from primary to secondary</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/activities.jpg"
                alt="School Activities"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Activities</h2>
            <p>Sports, cultural events, and extracurricular activities</p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Latest News</h2>
            <ul>
              <li>Annual Day Celebrations - December 15th</li>
              <li>Sports Meet 2024 - January 20th</li>
              <li>Science Fair - February 5th</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>Achievements</h2>
            <ul>
              <li>100% Pass Rate in Board Exams</li>
              <li>State Level Sports Champions</li>
              <li>Helped to achieve the students dreams year by year</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}