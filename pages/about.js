import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
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
        <h1 className={styles.title}>About G Venkatappa Memorial High School</h1>
        <p className={styles.description}>Our school has a rich history of academic excellence</p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Our History</h2>
            <p>Founded in 2007, we have been serving the community with excellence in education.</p>
          </div>
          <div className={styles.card}>
            <h2>Our Mission</h2>
            <p>To nurture young minds and create responsible global citizens.</p>
          </div>
          <div className={styles.card}>
            <h2>Our Values</h2>
            <p>Excellence, Integrity, Innovation, and Respect.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}