import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Annual Day Celebrations",
      date: "December 15, 2024",
      description: "Join us for our annual day celebrations featuring cultural performances.",
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "December 20, 2024",
      description: "Schedule for Term 1 parent-teacher meeting has been announced.",
    },
    // Add more news items
  ];

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
        <h1 className={styles.title}>News & Events</h1>
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <h3>{item.title}</h3>
              <p className={styles.newsDate}>{item.date}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}