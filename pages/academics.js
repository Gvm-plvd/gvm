import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Academics() {
  const programs = [
    {
      id: 1,
      name: "Primary Education",
      grades: "Grades 1-5",
      description: "Foundation years focusing on core subjects and overall development",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Regional Language"]
    },
    {
      id: 2,
      name: "Middle School",
      grades: "Grades 6-8",
      description: "Comprehensive education with introduction to advanced concepts",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science"]
    },
    {
      id: 3,
      name: "Secondary Education",
      grades: "Grades 9-10",
      description: "Preparation for board examinations with specialized subject focus",
      subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Social Sciences"]
    }
  ];

  const facilities = [
    {
      id: 1,
      name: "Science Laboratories",
      description: "Well-equipped labs for Physics, Chemistry, and Biology"
    },
    {
      id: 2,
      name: "Computer Lab",
      description: "Modern computer lab with latest software and internet facilities"
    },
    {
      id: 3,
      name: "Library",
      description: "Extensive collection of books, journals, and digital resources"
    }
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
        <h1 className={styles.title}>Academic Programs</h1>
        
        <section className={styles.academicPrograms}>
          <h2>Our Programs</h2>
          <div className={styles.programsGrid}>
            {programs.map((program) => (
              <div key={program.id} className={styles.programCard}>
                <h3>{program.name}</h3>
                <p className={styles.grades}>{program.grades}</p>
                <p>{program.description}</p>
                <div className={styles.subjects}>
                  <h4>Core Subjects:</h4>
                  <ul>
                    {program.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.facilities}>
          <h2>Academic Facilities</h2>
          <div className={styles.facilitiesGrid}>
            {facilities.map((facility) => (
              <div key={facility.id} className={styles.facilityCard}>
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p> 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}