import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      category: "Annual Day",
      images: [
        { src: "/gallery/annual-day-1.jpg", alt: "Annual Day Celebration" },
        { src: "/gallery/annual-day-2.jpg", alt: "Student Performance" },
      ]
    },
    {
      id: 2,
      category: "Sports Events",
      images: [
        { src: "/gallery/sports-1.jpg", alt: "Sports Day" },
        { src: "/gallery/sports-2.jpg", alt: "Cricket Match" },
      ]
    },
    // Add more categories and images
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
        <h1 className={styles.title}>School Gallery</h1>
        
        {galleries.map((gallery) => (
          <section key={gallery.id} className={styles.gallerySection}>
            <h2>{gallery.category}</h2>
            <div className={styles.imageGrid}>
              {gallery.images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 G Venkatappa Memorial High School. All rights reserved.</p>
      </footer>
    </div>
  )
}