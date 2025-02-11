import React from 'react';
import styles from '../../styles/Maindes.module.css';

function Maindes() {
  return (
    <div className={styles.Maindes01}>
      <p>자연과 함께하는 소중한 휴식의 순간</p>
      <div className={styles.images}>
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/e.webp`} alt="Image E" className={styles.image} />
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/a.webp`} alt="Image A" className={styles.image} />
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/b.webp`} alt="Image B" className={styles.image} />
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/c.webp`} alt="Image C" className={styles.image} />
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/f.webp`} alt="Image F" className={styles.image} />
        <img src={`${process.env.PUBLIC_URL}/yoloView/abc/d.webp`} alt="Image D" className={styles.image} />
      </div>
    </div>
  );
}

export default Maindes;