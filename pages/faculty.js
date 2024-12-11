import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      qualification: "Ph.D. in Education",
      experience: "20+ years",
      specialization: "Educational Leadership",
      email: "principal@gvmschool.com",
      image: "/faculty/principal.jpg",
      description: "Leading GVM School with a vision for excellence in education and student development."
    },
    {
      id: 2,
      name: "Mr. Robert Smith",
      position: "Mathematics Head",
      qualification: "M.Sc. Mathematics",
      experience: "15 years",
      specialization: "Advanced Mathematics",
      email: "math@gvmschool.com",
      image: "/faculty/math-head.jpg",
      description: "Passionate about making mathematics engaging and accessible to all students."
    },
    {
      id: 3,
      name: "Mrs. Emily Davis",
      position: "Science Coordinator",
      qualification: "M.Sc. Physics",
      experience: "12 years",
      specialization: "Experimental Physics",
      email: "science@gvmschool.com",
      image: "/faculty/science-head.jpg",
      description: "Dedicated to fostering scientific curiosity and practical learning."
    },
    {
      id: 4,
      name: "Mr. John Wilson",
      position: "English Department Head",
      qualification: "M.A. English Literature",
      experience: "18 years",
      specialization: "Creative Writing",
      email: "english@gvmschool.com",
      image: "/faculty/english-head.jpg",
      description: "Committed to developing strong communication and literary skills."
    },
    {
      id: 5,
      name: "Ms. Lisa Chen",
      position: "Computer Science Teacher",
      qualification: "M.Tech Computer Science",
      experience: "10 years",
      specialization: "Programming & AI",
      email: "cs@gvmschool.com",
      image: "/faculty/cs-head.jpg",
      description: "Preparing students for the digital future with modern technology skills."
    },
    {
      id: 6,
      name: "Mr. David Kumar",
      position: "Physical Education",
      qualification: "B.P.Ed, M.P.Ed",
      experience: "14 years",
      specialization: "Sports Training",
      email: "sports@gvmschool.com",
      image: "/faculty/sports-head.jpg",
      description: "Promoting physical fitness and sportsmanship among students."
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
        <Link href="/portal">Portal</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Our Faculty</h1>
        <p className={styles.subtitle}>Meet our dedicated team of educators</p>
        
        <div className={styles.facultyGrid}>
          {faculty.map((member) => (
            <div key={member.id} className={styles.facultyCard}>
              <div className={styles.facultyImageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.facultyImage}
                />
                <div className={styles.facultyOverlay}>
                  <p>{member.description}</p>
                </div>
              </div>
              <div className={styles.facultyInfo}>
                <h2>{member.name}</h2>
                <p className={styles.position}>{member.position}</p>
                <div className={styles.facultyDetails}>
                  <p><strong>Qualification:</strong> {member.qualification}</p>
                  <p><strong>Experience:</strong> {member.experience}</p>
                  <p><strong>Specialization:</strong> {member.specialization}</p>
                  <p><strong>Email:</strong> {member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}