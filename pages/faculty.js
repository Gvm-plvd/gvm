import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "T.Lakshmi Devi",
      position: "Telugu Teacher",
      qualification: "BED. in Education",
      experience: "8+ years",
      specialization: "BED in Telugu",
      email: "telugu@gmail.com",
      image: "/faculty/LakshmiDevi.jpg",
      description: "Passionate about making telugu engaging and accessible to all students."
    },
    {
      id: 2,
      name: "S. Sara Suhasini",
      position: "Principal & English Teacher",
      qualification: "M.A. English Literature",
      experience: "10+ years",
      specialization: "Creative Writing",
      email: "principal@gmail.com",
      image: "/faculty/principal.jpg",
      description: "Leadership, dedication, and a passion for teaching."
    },
    {
      id: 3,
      name: "G.Sreekanth",
      position: "Maths teacher",
      qualification: "M.A. Mathematics",
      experience: "10+ years",
      specialization: "Mathematics",
      email: "maths@gmail.com",
      image: "/faculty/maths.jpg",
      description: "Mathematics teacher with a passion for teaching and learning."
    },
    {
      id: 4,
      name: "S.Sharon",
      position: "English Department",
      qualification: "M.A. English Literature",
      experience: "10+ years",
      specialization: "Creative Writing",
      email: "english@gmail.com",
      image: "/faculty/english.jpg",
      description: "Committed to developing strong communication and literary skills."
    },
    {
      id: 5,
      name: "S.Himjan",
      position: "Computer Science Teacher",
      qualification: "M.Tech Computer Science",
      experience: "10 years",
      specialization: "Programming & AI",
      email: "cs@gmail.com",
      image: "/faculty/cs.jpg",
      description: "Preparing students for the digital future with modern technology skills."
    },
    {
      id: 6,
      name: "S.Prabhavathi",
      position: "Physical Education",
      qualification: "B.P.Ed, M.P.Ed",
      experience: "11+ years",
      specialization: "Sports Training",
      email: "sports@gmail.com",
      image: "/faculty/sports.jpg",
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