import React, { useState, useEffect } from 'react';
import styles from '../../styles/Maindes.module.css';

const imagePaths = ['e', 'a', 'b', 'c', 'f', 'd'];

function Maindes() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          setLoadedImages((prev) => [...prev, img.dataset.src]);
          observer.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll(`.${styles.image}`);
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.Maindes01}>
      <p>자연과 함께하는 소중한 휴식의 순간</p>
      <div className={styles.images}>
        {imagePaths.map((path) => (
          <img
            key={path}
            data-src={`${process.env.PUBLIC_URL}/yoloView/abc/${path}.webp`}
            src={loadedImages.includes(`${process.env.PUBLIC_URL}/yoloView/abc/${path}.webp`) ? `${process.env.PUBLIC_URL}/yoloView/abc/${path}.webp` : ''}
            alt={`Image ${path.toUpperCase()}`}
            className={styles.image}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Maindes;

