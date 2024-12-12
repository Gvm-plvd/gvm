import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import fs from 'fs';
import path from 'path';
import styles from '../styles/Home.module.css';

const Gallery = ({ imagePaths }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath); // Set the selected image to display in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <section className={styles.gallerysection}>
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
      <h2>Gallery</h2>
      <div className={styles.gallerygrid}>
        {imagePaths.map((imagePath, index) => (
          <div key={index} className={styles.galleryitem}>
            <Image
              src={`/gallery/${imagePath}`}  // Dynamically use the image path
              alt={`Gallery Image ${index + 1}`}
              width={300}  // Fixed width
              height={300}  // Fixed height
              className={styles.image}  // Custom styling for images
              onClick={() => handleImageClick(imagePath)}  // Handle click to open modal
            />
          </div>
        ))}
      </div>

      {/* Modal for displaying the clicked image */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <Image
              src={`/gallery/${selectedImage}`}
              alt="Large Gallery Image"
              width={600}  // Adjust width for large image
              height={600}  // Adjust height for large image
            />
          </div>
        </div>
      )}
    </section>
  );
};

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), 'public', 'gallery');
  
  // Read image files from the 'public/gallery' folder
  const files = fs.readdirSync(imagesDirectory);
  
  // Filter out non-image files (optional)
  const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i));

  return {
    props: {
      imagePaths: imageFiles,  // Pass image file names as props
    },
  };
}

export default Gallery;
