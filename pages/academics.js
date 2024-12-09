import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Academics() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Academics</h1>
        <p className={styles.description}>Excellence in Education</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Primary Section</h2>
            <p>Grades 1-5 with focus on fundamental education</p>
          </div>
          <div className={styles.card}>
            <h2>Middle School</h2>
            <p>Grades 6-8 with comprehensive curriculum</p>
          </div>
          <div className={styles.card}>
            <h2>High School</h2>
            <p>Grades 9-12 preparing students for higher education</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2024 School GVM. All rights reserved.</p>
      </footer>
    </div>
  )
}